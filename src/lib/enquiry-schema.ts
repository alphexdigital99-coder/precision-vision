import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  company: z.string().trim().min(2, "Please enter your business name.").max(160),
  phone: z.string().trim().max(40),
  interest: z.enum(["Lens fitting", "Lens options", "Business partnership", "General enquiry"]),
  message: z
    .string()
    .trim()
    .min(10, "Please include a little more detail (at least 10 characters).")
    .max(3000),
  website: z.string().max(0, "Unable to submit this enquiry."),
});
export type EnquiryData = z.infer<typeof enquirySchema>;
