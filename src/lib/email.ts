import nodemailer from "nodemailer";

export async function sendNotification(subject: string, text: string) {
  const server = process.env.EMAIL_SERVER;
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_TO;
  if (!server || !from || !to) return;

  const transporter = nodemailer.createTransport(server);
  await transporter.sendMail({ from, to, subject, text });
}
