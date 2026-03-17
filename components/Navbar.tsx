"use client";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(){
  const pathname = usePathname();
  const isActive = (path:any) => pathname === path;

  return(
    <nav className="h-20 border flex items-center justify-between px-60 bg-white mb-4">
      <Link className="flex items-center gap-4" href="/"><Image src="/DEACBadge.png" alt="DEAC logo" width="60" height="60"/><span className="font-black text-2xl">E-sport</span></Link>
      <div className="nav-items flex gap-6 items-center">
        <Link href="/center" className="nav-item"><Button variant="ghost" className={isActive("/center") ? "bg-yellow-500 text-white" : ""}>E-sport Központ</Button></Link>
        <Separator orientation="vertical"/>
        <Link href="/about" className="nav-item"><Button variant="ghost" className={isActive("/about") ? "bg-yellow-500 text-white" : ""}>Rólunk</Button></Link>
        <Separator orientation="vertical"/>
        <Link href="/teams" className="nav-item"><Button variant="ghost" className={isActive("/teams") ? "bg-yellow-500 text-white" : ""}>Csapataink</Button></Link>
        <Separator orientation="vertical"/>
        <Link href="/events" className="nav-item"><Button variant="ghost" className={isActive("/events") ? "bg-yellow-500 text-white" : ""}>Események</Button></Link>
        <Separator orientation="vertical"/>
        <Link href="/contact" className="nav-item"><Button variant="default" className={isActive("/contact") ? "bg-yellow-500 text-white" : ""}>Kapcsolat / Jelentkezés</Button></Link>
      </div>
    </nav>
  )
}