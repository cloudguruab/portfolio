// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  await sgMail
    .send({
      to: "ap.brown011@gmail.com",
      from: "message.Email",
      subject: "New Message from portfolio!",
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    });
      res.status(200).json({ status: "Ok" });
  // res.status(200).json({status: "john doe"})
};
