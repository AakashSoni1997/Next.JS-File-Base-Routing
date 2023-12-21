import { MongoClient } from "mongodb";

async function fetchNewsLetter(req, res) {
  let client; // Define the client variable outside the try block

  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    try {
      client = new MongoClient(process.env.MONGODB_URI);

      await client.connect();
      const db = client.db();

      await db.collection("emails").insertOne({ email: userEmail });

      res.status(201).json({ message: "Sign In successful" });
    } catch (error) {
      console.error("MongoDB operation error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    } finally {
      if (client) {
        await client.close();
      }
    }
  }
}

export default fetchNewsLetter;
