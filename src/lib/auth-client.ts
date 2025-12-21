import { polarClient } from "@polar-sh/better-auth";
import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient();

export const { signIn, signUp, useSession, signOut, checkout, customer } =
  createAuthClient({
    plugins: [polarClient()],
  });
