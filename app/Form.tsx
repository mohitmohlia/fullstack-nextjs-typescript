"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
  const [title, setTitle] = useState<string>("");
  const router = useRouter();
  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await fetch(`/api/createPost`, {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    const response = await data.json();
    router.refresh();
    setTitle("");
    // if (!response.ok) {
    //   throw new Error("Error occured while creating post");
    // }
  };

  return (
    <form onSubmit={submitPost} className="flex flex-col">
      <input
        className="bg-slate-800 place-content-center text-xl text-teal-200 text-center"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Enter Post title"
      />
      <button
        type="submit"
        className="m-3 bg-orange-400 text-slate-800 text-3xl"
      >
        Submit
      </button>
    </form>
  );
}
