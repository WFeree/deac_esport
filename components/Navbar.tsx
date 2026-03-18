"use client";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname.startsWith(path);

  const navItem = (href: string, label: string) => (
    <Link href={href} className="relative group">
      <Button variant="ghost" className={`relative px-2 ${isActive(href) ? "text-black dark:text-white font-semibold" : ""}`}>
        {label}
        <span className={`absolute left-0 -bottom-1 h-0.5 bg-black dark:bg-white transition-all duration-300 ${isActive(href) ? "w-full" : "w-0 group-hover:w-full"}`}/>
      </Button>
    </Link>
  );

  return (
    <nav className="h-20 border-b flex items-center justify-between px-60 bg-white mb-4 left-0 top-0
    dark:bg-[#121212]">
      <Link className="flex items-center gap-4" href="/">
        <Image src="/DEACBadge.png" alt="DEAC logo" width="60" height="60" />
        <span className="font-black text-2xl">E-sport</span>
      </Link>
      <div className="flex gap-6 items-center">
        {navItem("/center", "E-sport Központ")}
        <Separator orientation="vertical" />
        {navItem("/events", "Események")}
        <Separator orientation="vertical" />
        {navItem("/teams", "Csapataink")}
        <Separator orientation="vertical" />
        {navItem("/about", "Rólunk")}
        <Separator orientation="vertical" />
        <Link href="/contact">
          <Button className={`transition-all duration-300 ${isActive("/contact")? "bg-black dark:bg-white dark:text-black text-white": "bg-primary hover:scale-102"}`}>
            Kapcsolat / Jelentkezés
          </Button>
        </Link>
      </div>
    </nav>
  );
}