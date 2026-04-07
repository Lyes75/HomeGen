import { verifyAdmin } from "@/lib/admin-auth";
import AdminShell from "@/components/admin/AdminShell";

export const metadata = {
  title: "Admin — HomeGen",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await verifyAdmin();

  return <AdminShell>{children}</AdminShell>;
}
