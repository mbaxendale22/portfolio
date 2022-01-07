import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {

    await sendgrid.send({
      to: "mdbaxendale1@gmail.com", // Your email where you'll receive emails
      from: "mdbaxendale1@gmail.com", // your website email address here
      subject: `${req.body.subject}`,
      html: `${req.body.message}`,
    });
  } catch (error) {
    console.log('not working', error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;