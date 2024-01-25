"use client";

import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

export const DeleteButton: React.FC<{ postId: number }> = ({ postId }) => {
  const router = useRouter();
  const deleteTodoMutation = api.post.delete.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  const handleDeletePost = async () => {
    try {
      console.log("delete id:", postId);
      const result = await deleteTodoMutation.mutateAsync(postId);
      console.log("Mutation result:", result);
    } catch (error) {
      console.error("Mutation error:", error);
    }
  };

  return (
    <p
      onClick={handleDeletePost}
      className="flex cursor-pointer items-center justify-center rounded-full bg-gray-500/50 px-2 py-0"
    >
      x
    </p>
  );
};
