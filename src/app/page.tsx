import { unstable_noStore as noStore } from "next/cache";
import { api } from "~/trpc/server";
import CrudShowcase from "./_components/CrudShowcase";

export default async function Home() {
  noStore();
  // const hello = await api.post.hello.query({ text: "from My todo app" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          My <span className="text-[hsl(280,100%,70%)]">Todo</span> App
        </h1>

        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {/* {hello ? hello.greeting : "Loading tRPC query..."} */}
          </p>
        </div>

        <CrudShowcase />
      </div>
    </main>
  );
}
