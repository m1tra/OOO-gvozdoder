'use client'
import { usePathname } from "next/navigation"

export default function Footer() {
  const path = usePathname();
  console.log(path);
  
  return (
    path !== '/' ? (
      <footer className='z-50 h-52 bg-neutral-950/90 backdrop-blur border-t flex items-center border-neutral-700'>
        
      </footer>
    ) : null
  );
}
