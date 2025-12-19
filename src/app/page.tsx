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

  const testAi = useMutation(
    trpc.testAI.mutationOptions({
      onSuccess: () => {
        toast.success("AI Test Successfully");
      },
    })
  );

  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(trpc.getWorkflows.queryOptions());
        toast.success("Workflow Created Successfully");
      },
    })
  );

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center gap-y-6">
      protected server component
      <div>{JSON.stringify(data, null, 2)}</div>
      <Button disabled={testAi.isPending} onClick={() => testAi.mutate()}>
        {testAi.isPending ? (
          <>
            <LoaderCircleIcon className="w-4 h-4 animate-spin" />
            Generating text...
          </>
        ) : (
          "Generate Text"
        )}
      </Button>
    
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
