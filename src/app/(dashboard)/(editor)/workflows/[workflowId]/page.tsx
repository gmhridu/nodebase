import { requireAuth } from "@/lib/auth-utils";


interface WorkflowIdPageProps {
  params: Promise<{ workflowId: string }>
}

async function WorkflowIdPage({ params }: WorkflowIdPageProps) {
  await requireAuth();

  const { workflowId } = await params;

  return (
    <div>WorkflowIdPage: {workflowId}</div>
  )
}

export default WorkflowIdPage
