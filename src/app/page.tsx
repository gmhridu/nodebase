"use client";

import { requireAuth } from "@/lib/auth-utils";

import { LogoutButton } from "./logout";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { LoaderCircleIcon } from "lucide-react";
import { toast } from "sonner";

export default function Home() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(trpc.getWorkflows.queryOptions());
        toast.success("Workflow Created Successfully")
      },
    })
  );

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center gap-y-6">
      protected server component
      <div>{JSON.stringify(data, null, 2)}</div>
      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        {create.isPending ? (
          <>
            <LoaderCircleIcon className="w-4 h-4 animate-spin" />
            Creating Workflow...
          </>
        ) : (
          "Create Workflow"
        )}
      </Button>
      <LogoutButton />
    </div>
  );
}
