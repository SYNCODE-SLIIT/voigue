import { redirect } from "next/navigation";
import { loginSchema } from "@/lib/validations/forms";
import { setAdminSession, verifyAdminPassword } from "@/lib/auth";

export async function POST(request: Request) {
  const form = await request.formData();
  const parsed = loginSchema.safeParse({
    email: form.get("email"),
    password: form.get("password")
  });
  if (!parsed.success) redirect("/admin?login=failed");

  const ok = await verifyAdminPassword(parsed.data.email, parsed.data.password);
  if (!ok) redirect("/admin?login=failed");
  await setAdminSession(parsed.data.email);
  redirect("/admin");
}
