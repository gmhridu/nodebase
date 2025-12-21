"use client";

import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const useLogout = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    setLoading(true);
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.prefetch("/login");
          router.replace("/login");
          toast.success("Logged out successfully!");
        },
        onSettled: () => setLoading(false),
      },
    });
  };

  return { logout, loading };
};
