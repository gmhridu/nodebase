import { requireAuth } from "@/lib/auth-utils";


async function ExcutionsPage() {
  await requireAuth();

  return (
    <div>ExcutionsPage</div>
  )
}

export default ExcutionsPage
