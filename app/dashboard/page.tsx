import { buttonVariants } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { get } from "http";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

export default async function Dashboard() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/register");
  }
  return (
    <div className="flex justify-between items-center">
      <div className="py-6">
        <h1 className="text-3txl font-bold tracking-tight mb-8">
          Your Blog Posts
        </h1>
      </div>
      <Link className={buttonVariants()} href={"/dashboard"}>
        Create Post
      </Link>
    </div>
  );
}