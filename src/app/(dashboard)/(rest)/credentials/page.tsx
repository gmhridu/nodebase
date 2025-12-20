import { requireAuth } from "@/lib/auth-utils";


async function CredentialPage() {
  await requireAuth();

  return (
    <div>CredentialPage</div>
  )
}

export default CredentialPage
