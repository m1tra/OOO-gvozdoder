'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"


export default function Footer() {
  const path = usePathname();
  console.log(path);
  
  return (
    path !== '/' ? (
      <footer className='z-50  bg-neutral-950/90 backdrop-blur  flex items-center justify-center py-2 px-1 h-10'>
        <div className='flex gap-2 lg:gap-4 '>
          <Link href="/">
            <div className='text-neutral-300 text-xs'>Gvozdoder</div>
          </Link>
          <Link href="/about-us">
            <div className='text-neutral-300 text-xs'>About-us</div>
          </Link>
          <Link href="/order">
            <div className='text-neutral-300 text-xs'>Order gvozdi</div>
          </Link>
          <Link href="/returns">
            <div className='text-neutral-300 text-xs'>Exchanges & Returns</div>
          </Link>
        </div>
      </footer>
    ) : null
  );
}
