import admin from "firebase-admin";
import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../../utils/queryApi";
import { adminDb } from "../../../FireBaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;
  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt!" });
  }
  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid chatId!" });
  }

  // chatGPT query
  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || "SamGPT was unable to find an answer for that!",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "SamGPT",
      name: "SamGPT",
      avatar: "https://links.papareact.com/89k",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
