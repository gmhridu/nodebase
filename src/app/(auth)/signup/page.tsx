import { RegisterForm } from "@/features/auth/components/register-form";
import { requireUnauth } from "@/lib/auth-utils";

async function SignupPage() {
  await requireUnauth();
  return (
    <div>
      <RegisterForm />
    </div>
  );
}

export default SignupPage;
