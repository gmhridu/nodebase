import { requireAuth } from "@/lib/auth-utils"


async function WorkflowPage() {
  await requireAuth();

  return (
    <div>Workflow Page</div>
  )
}

export default WorkflowPage




