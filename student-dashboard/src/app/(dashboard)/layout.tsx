import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen">
            <div className="p-4 w-[14%] lg:w-[16%] mb:w-[8%] xl:w-[14%]">
                <Link href="/" className="flex justify-center lg:justify-start items-center gap-2">
                <Image src="/logo.png" alt="" height={32} width={32}></Image>
                <span className="lg:block hidden font-bold">School DashBoard</span>
                </Link>
                <Menu/>
            </div>
            <div className="flex flex-col bg-[#F7F8FA] w-[86%] lg:w-[84%] mb:w-[92%] xl:w-[86%] overflow-scroll">
                <Navbar/>
                {children}
            </div>
        </div>
    );
}
