import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 overflow-y-scroll">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2 "
        >
          <Image src="/logo.png" alt="log" width={32} height={32} />
          <span className="hidden lg:block font-bold">E - School</span>
        </Link>

        <Menu />
      </div>

      {/* Right */}
      <div className="w-[86%] md:w-[92%] lg:[84%] xl:w-[86%] bg-[#f7f8fa] overflow-y-scroll flex flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
}
