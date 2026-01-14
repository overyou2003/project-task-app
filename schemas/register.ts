import * as z from "zod";

// const phoneRegex = new RegExp(
//   /^([0]{1})([0-9]{9})$/
// );

export const RegisterSchema = z
  .object({
    email: z
      .string()
      .email("กรุณากรอกรูปแบบ Email ที่ถูกต้อง")
      .transform((val) => val.toLowerCase()),
    password: z.string().min(8, {
      message: "รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร",
    }),
    confirmPassword: z.string().min(8, {
      message: "กรุณายืนยันรหัสผ่าน",
    }),
    fullName: z.string().min(5, {
      message: "กรุณากรอกชื่อเต็มอย่างน้อย 5 ตัวอักษร",
    }),
    // phoneNumber: z.string()
    //   .min(1, {
    //       message: "กรุณากรอกหมายเลขโทรศัพท์"
    //   })
    //   .length(10, {
    //       message: "หมายเลขโทรศัพท์ต้องมี 10 หลัก"
    //   })
    //   .regex(phoneRegex, {
    //       message: "รูปแบบหมายเลขโทรศัพท์ไม่ถูกต้อง (ต้องเป็นตัวเลข 10 หลัก, ขึ้นต้นด้วย 0)"
    //   }),
  })

  .refine((data) => data.password === data.confirmPassword, {
    message: "รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof RegisterSchema>;
