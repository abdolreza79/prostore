import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2}?$)/.test(formatNumberWithDecimal(Number(value))),
    { message: "Product must have exactlt two decimal places" }
  );
export const insertProductSchema = z.object({
  name: z
    .string()
    .min(3, { message: "product name must be atleast 3 characters" }),
  slug: z
    .string()
    .min(3, { message: "Slug name must be atleast 3 characters" }),
  category: z
    .string()
    .min(3, { message: "Category name must be atleast 3 characters" }),
  description: z
    .string()
    .min(3, { message: "Description name must be atleast 3 characters" }),
  images: z.array(z.string()).min(1, "Product must have atleast one image"),
  price: currency,
  brand: z
    .string()
    .min(3, { message: "Brand name must be atleast 3 characters" }),
  // numReviews:,
  stock: z.coerce.number(),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
});
