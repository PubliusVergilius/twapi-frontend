import { SidebarProvider } from "@/components/ui/sidebar";

type Props = { children: React.ReactNode };
export default function Layout({ children }: Props) {
  return (
    <>
      <main className="w-full flex flex-col justify-center">{children}</main>
    </>
  );
}
