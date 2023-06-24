import { sql } from "@vercel/postgres"; 
import { drizzle } from 'drizzle-orm/vercel-postgres';
import {pgTable, varchar, integer, serial} from "drizzle-orm/pg-core";

export const cartTable = pgTable("cart", {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id", {
        length: 255
    }).notNull(),
    product_id: varchar("product_id", {
        length: 255
    }),
    quantity: integer("quantity").notNull()
})

export const db = drizzle(sql)