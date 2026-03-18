import Image from "next/image"
import { Separator } from "./ui/separator"
import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"
import { Button } from "./ui/button"

const Footer = () => {
  return (
    <footer className="h-fit py-5 px-60  bg-white border dark:bg-[#121212]">
      <div id="top" className="grid grid-cols-3 items-center">
          <div id="logo">
            <div className="flex gap-4 items-center mb-4">
              <Image src="/DEACBadge.png" alt="Deac Logo" width={60} height={60} />
              <span className="font-black text-2xl">E-sport</span>
            </div>
            <p>1919 óta a sport szolgálatában!</p>
          </div>
          <div id="partners">
            <img src="/de.png" className="max-h-10"/>
          </div>
          <div id="right" className="ml-auto">      <ThemeSwitch></ThemeSwitch></div>
      </div>
      
      <Separator className="my-5"/>
      
      <div className="flex justify-between" id="bottom">
        <div className="flex gap-6 items-center">
          <p className="text-black dark:text-white">DEAC Esport 2026 &copy;</p>
          <Button variant="link"><Link href="/tsc">Adatkezelési tájékoztató</Link></Button>
          <Button variant="link">Süti beállítások</Button>
        </div>
        <div className="flex gap-6 items-center"> 
          <div className="hover:bg-[#0866FF] p-2 rounded-full hover:cursor-pointer">
            <a href="https://www.facebook.com/deacesport">
              <img src="/facebook_light.svg" className="block dark:hidden w-5" />
              <img src="/facebook_dark.svg" className="hidden dark:block w-5" />
            </a>
          </div>
          <div className="hover:bg-[#FF0069] p-2 rounded-full hover:cursor-pointer">
            <a href="https://www.instagram.com/deac_esport/">
              <img src="/instagram_light.svg" className="block dark:hidden w-5" />
              <img src="/instagram_dark.svg" className="hidden dark:block w-5" />
            </a> 
          </div>
          <div className="hover:bg-[#5865F2] p-2 rounded-full hover:cursor-pointer">
            <a href="https://dsc.gg/deac-esport">
              <img src="/discord_light.svg" className="block dark:hidden w-5" />
              <img src="/discord_dark.svg" className="hidden dark:block w-5" />
            </a> 
          </div>
          <div className="hover:bg-[#9146FF] p-2 rounded-full hover:cursor-pointer">
            <a href="https://twitch.tv/deacesport">
              <img src="/twitch_light.svg" className="block dark:hidden w-5" />
              <img src="/twitch_dark.svg" className="hidden dark:block w-5" />
            </a> 
          </div>
          <div className="hover:bg-[#FF0000] p-2 rounded-full hover:cursor-pointer">
            <a href="#">
              <img src="/youtube_light.svg" className="block dark:hidden w-5" />
              <img src="/youtube_dark.svg" className="hidden dark:block w-5" />
            </a> 
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

