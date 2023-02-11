import prisma from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

type postProps = {
  title: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post: postProps = JSON.parse(req.body);
    if (req.method === "POST") {
      if (!post.title.length) {
        return res.status(200).json("Please do not leave this title empty");
      }
      try {
        const data = await prisma.post.create({
          data: {
            title: post.title,
          },
        });
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).json("Error creating post");
      }
    }
  } catch (error) {
    return res.status(500).send(error);
  }
}
