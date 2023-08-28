// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailPaterners, transporter } from "@/config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.sub) {
      return res.status(400).json({ message: "Bad request" });
    }
    try {
      await transporter.sendMail({
        ...mailPaterners,
        subject: "New Subscriber of Smilax Global",
        text: "This is text screen",
        html: `
                <p>Hello Admin, </p> <br>
                <p>A new subscriber wants to get the latest content by email from Smilax Global.</p> 
                <p>E-mail Address: ${data.sub} </p>
              `,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler;
