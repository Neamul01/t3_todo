import { api } from "~/trpc/server";
import { CreatePost } from "./create-post";
import { DeleteButton } from "./DeleteButton";
import { useQuery } from "@tanstack/react-query";

export default async function CrudShowcase() {
  //   --------------###### why api imported from server?
  const latestPosts = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      <p className="text-center text-xl">Todo&apos;s</p>
      {latestPosts ? (
        <div className="my-5 flex flex-col gap-2">
          {latestPosts.map((latestPost) => (
            <div
              className="flex items-center justify-between gap-2 rounded-lg bg-gray-300/10 px-3 py-3"
              key={latestPost.id}
            >
              <p key={latestPost.id} className="truncate">
                {latestPost.name}
              </p>
              {/* Use the client component for the clickable "x" button */}
              <DeleteButton postId={latestPost.id} />
            </div>
          ))}
        </div>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
