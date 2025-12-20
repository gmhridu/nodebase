import { AppHeader } from "@/components/app-header"


function RestLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      <main className="flex-1">
        {children}
      </main>
    </>
  )
}

export default RestLayout
