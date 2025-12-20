import { requireAuth } from "@/lib/auth-utils";


interface CredentialIdPageProps {
  params: Promise<{
    credentialId: string
  }>
}

async function CredentialIdPage({ params }: CredentialIdPageProps) {
  await requireAuth();

  const { credentialId } = await params;


  return (
    <div>CredentialIdPage: {credentialId}</div>
  )
}

export default CredentialIdPage
