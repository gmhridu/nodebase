import { requireAuth } from "@/lib/auth-utils";

interface ExecutionIdPageProps {
  params: Promise<{
    executionId: string
  }>
}

async function ExecutionIdPage({ params }: ExecutionIdPageProps) {
  await requireAuth();

  const { executionId } = await params;

  return (
    <div>ExecutionIdPage: {executionId}</div>
  )
}

export default ExecutionIdPage
