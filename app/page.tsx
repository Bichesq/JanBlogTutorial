import Link from "next/link";
import Image from "next/image";
import { prisma } from "./utils/db";

async function getData() {
  const items = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,
      authorId: true,
      createAt: true,
      updateAt: true,
    },
    orderBy: {
      createAt: "desc",
    },
    take: 3,
  });
  return items;
}

export default async function Home() {
  const data = await getData();
  
  return (
    <div className="py-6">
      <h1 className="text-txl font-bold tracking-tight mb-8">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
            <Image src={item.imageUrl} alt={item.title} width={400} height={300} className="rounded-md" />
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
