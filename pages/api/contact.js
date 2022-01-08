const handler = (req, res) => {
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
    console.log(newMessage);

    res.status(201).json({ message: "Message succesfully stored", newMessage });
  }
};

export default handler;
