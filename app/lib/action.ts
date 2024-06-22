"use server";

import { WaitList } from "../models/WaitList";
import dbConnect from "./db";
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

export async function whiteList(email: any) {
  try {
    await dbConnect();

    const NewMember = new WaitList({
      email: email,
    });

    await NewMember.save();

    return { status: "successfully added" };
  } catch (error) {
    console.log(error);
    return {
      status: "Seems like theres an issue trying to add you, contact me...",
    };
  }
}
