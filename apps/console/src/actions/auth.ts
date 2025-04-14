"use server"
import { db } from "@workspace/db";
import { users } from "@workspace/drizzle/schema";
import { hash } from "bcryptjs"
import { eq } from "drizzle-orm"
import { redirect } from "next/navigation"

export async function register({ email, password }: { email: string; password: string }) {
  const existing = await db.query.users.findFirst({ where: (u, { eq }) => eq(u.email, email) })
  if (existing) throw new Error("Email déjà utilisé")
  const hashed = await hash(password, 10)
  await db.insert(users).values({ email, password: hashed })
  redirect("/login")
}