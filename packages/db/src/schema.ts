import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const subscribers = pgTable("subscribers", {
  email: varchar("email", { length: 255 }).primaryKey(),
  subscribedAt: timestamp("subscribed_at").defaultNow(),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
})