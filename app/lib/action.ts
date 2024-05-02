"use server";

import { sendMail } from "./mail";

export async function ContactEmail(formData: FormData) {
  try {
    const data = Object.fromEntries(formData.entries());

    const { to, name, subject, content } = data;

    await sendMail({
      to: process.env.SMTP_EMAIL as string,
      name: "no name", // get user name
      subject: "user wants subscribe",
      content: content as string,
    });

    return { message: "i am dead" };
  } catch (error) {
    console.log(error);
    return { message: "I am sorry but the request failed.... you got denied" };
  }
}
