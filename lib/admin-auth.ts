import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ADMIN_COOKIE = "admin_token";

export async function verifyAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  if (!token) redirect("/admin/login");
  return true;
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return !!cookieStore.get(ADMIN_COOKIE)?.value;
}
