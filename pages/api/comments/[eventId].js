import { MongoClient } from "mongodb";

async function comments(req, res) {
  const eventId = req.query.eventId;
  const client = await MongoClient.connect(process.env.MONGODB_URI);

  try {
    if (req.method === "POST") {
      const { email, name, text } = req.body;

      if (
        !name ||
        !email.includes("@") ||
        name.trim() === "" ||
        !text ||
        text.trim() === ""
      ) {
        res.status(422).json({ message: "Invalid Details" });
        return;
      }

      const newComment = {
        email,
        name,
        text,
        eventId,
      };

      const db = client.db();
      const result = await db.collection("comments").insertOne(newComment);

      newComment.id = result.insertedId;
      res.status(201).json({ message: "Added Comment", comment: newComment });
    }

    if (req.method === "GET") {
      const db = client.db();
      const comments = await db
        .collection("comments")
        .find()
        .sort({ _id: -1 })
        .toArray();

      res.status(200).json({ comments });
    }
  } catch (error) {
    console.error("MongoDB operation error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await client.close();
  }
}

export default comments;
