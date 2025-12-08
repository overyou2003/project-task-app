import * as z from "zod";

export const LoginSchema = z.object({
  // Email: ต้องเป็น string, ต้องมี format เป็น email
  email: z.string().email({
    message: "กรุณากรอกรูปแบบ Email ที่ถูกต้อง",
  }),
  // Password: ต้องเป็น string, และมีความยาวอย่างน้อย 8 ตัวอักษร
  password: z.string().min(8, {
    message: "รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร",
  }),
});

// กำหนด Type ของ Form Data เพื่อให้ Type-Safe
export type LoginFormValues = z.infer<typeof LoginSchema>;