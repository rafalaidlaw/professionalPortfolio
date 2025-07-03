const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (err) {
    return { statusCode: 400, body: "Invalid request body" };
  }

  const { name, email, message } = data;

  if (!name || !email || !message) {
    return { statusCode: 400, body: "Missing required fields" };
  }

  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
  });

  // Debug: Log environment variables (do not log full key in production)
  console.log("MAILGUN_API_KEY present:", !!process.env.MAILGUN_API_KEY);
  console.log("MAILGUN_DOMAIN:", process.env.MAILGUN_DOMAIN);

  try {
    await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: `Contact Form <postmaster@${process.env.MAILGUN_DOMAIN}>`,
      to: "rafalaidlaw@gmail.com", // <-- changed to your Gmail address
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    return { statusCode: 200, body: "Email sent!" };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify(err) };
  }
}; 