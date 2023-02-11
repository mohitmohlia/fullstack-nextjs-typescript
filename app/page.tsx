import Link from "next/link";
import Form from "./Form";
async function getPost() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) {
    console.log(res);
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default async function Home() {
  const data: { id: number; title: string }[] = await getPost();

  return (
    <div className="h-auto flex justify-center items-center flex-col">
      <div className="m-4">
        <Link
          className="bg-teal-500 text-black font-medium py-2 px-4 rounded-md"
          href="/dashboard"
        >
          Go to dashboard
        </Link>
      </div>
      <div className="m-10 h-screen flex justify-start items-center flex-col">
        <div className="m-4 border-solid border-8  border-r-8 h-32">
          <Form />
        </div>

        {data.map((post) => (
          <h1 className="text-white text-lg" key={post.id}>
            {post.title}
          </h1>
        ))}
      </div>
    </div>
  );
}
