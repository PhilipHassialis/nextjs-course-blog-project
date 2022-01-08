import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim().length === 0 ||
      !message ||
      message.trim().length === 0
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    // store the data
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://NEXTJSUSER:aiD0ppjwUKorq8pB@cluster0.tkycs.mongodb.net/my-site?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to DB" });
      return;
    }

    const db = client.db();

    let result;
    try {
      result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Could not insert data to DB" });
      return;
    }

    client.close();

    res.status(201).json({ message: "Message succesfully stored", newMessage });
  }
};

export default handler;
