"use client";

import { Button } from "@/components/ui/button";
import { useLogout } from "@/features/hooks/useLogout";
import { Loader2Icon } from "lucide-react";

export const LogoutButton = () => {
  const { logout, loading } = useLogout();

  return (
    <Button onClick={logout} disabled={loading}>
      {loading && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
      {loading ? "Logging out..." : "Logout"}
    </Button>
  );
};
