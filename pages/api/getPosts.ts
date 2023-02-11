// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      //get prisma to fetch the posts
      const data = await prisma.post.findMany();
      return res.status(200).json(data);
    } catch (error: any) {
      return res.status(500).json(error);
    }
  }
}
