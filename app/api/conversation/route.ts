import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req.query;

  const response = await fetch(
    `https://api.edenai.run/v1/pretrained/text/gpt-3?text=${query}`,
    {
      headers: {
        Authorization: `Bearer
            ${process.env.EDEN_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  return res.status(200).json(data);
}
