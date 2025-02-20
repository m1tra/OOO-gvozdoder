'use client'
import React, { useState } from 'react'
import { Github, Instagram, Phone, Twitter, UserRound, Youtube } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { DialoAuth } from './form';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
type Props = {}

export default function Header({}: Props) {
  const [showPanel,setShowPanel]=useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Закрываем Drawer
  };
  const handleShow=(val?:boolean)=>{
    setShowPanel(val!)
  }
  return (
    <div className='z-50 fixed h-16 bg-neutral-950/90 backdrop-blur w-full border-b flex items-center border-neutral-700'>
        <div className='flex w-full items-center justify-between px-10'>
            <div className='hidden lg:flex gap-4'>
                <Link href = "/">
                  <div className='text-neutral-300 text-sm '>OOO gvozdoder</div>
                </Link>
                <Link href = "/about-us">
                  <div className='text-neutral-300 text-sm '>About-us</div>
                </Link>
                <Link href = "/order">
                  <div className='text-neutral-300 text-sm '>Order gvozdi</div>
                </Link>
                <Link href = "/returns">
                  <div className='text-neutral-300 text-sm '>Exchanges & Returns</div>
                </Link>
            </div>    
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <motion.button
                  onClick={()=>handleShow(!showPanel)} 
                  transition={{ duration: 0.5 }}
                  className={`group lg:hidden relative  h-[26px] w-[26px] bg-white/0 transition-all  hover:bg-white/20 rounded-xl z-[110] `}>
                  <span className={` rounded-lg w-full h-[2px] ${showPanel===true?'bg-neutral-300 rotate-180':"bg-neutral-300"} transition-all duration-300 bg-neutral-300 absolute top-1 left-0`}></span>
                  <span className={` rounded-lg w-full h-[2px] ${showPanel===true?'bg-neutral-300 rotate-180':"bg-neutral-300"} transition-all duration-300 bg-neutral-300 absolute top-1/2 -translate-y-1/2 left-0`}></span>
                  <span className={` rounded-lg w-1/2  h-[2px] ${showPanel===true?'bg-neutral-300 rotate-180':"bg-neutral-300"} transition-all duration-300 bg-neutral-300 absolute bottom-1 left-0`}></span>
                </motion.button>
              </DrawerTrigger>
            <DrawerContent >
            <DrawerHeader className='p-0 m-0'>
              <DrawerTitle>
               
              </DrawerTitle>
            </DrawerHeader>
            <div className='flex flex-col gap-4 h-96 p-5'>
              <Link href="/" onClick={handleLinkClick}>
                <div className='text-white text-base'>OOO gvozdoder</div>
              </Link>
              <Link href="/about-us" onClick={handleLinkClick}>
                <div className='text-white text-base'>About-us</div>
              </Link>
              <Link href="/order" onClick={handleLinkClick}>
                <div className='text-white text-base'>Order gvozdi</div>
              </Link>
              <Link href="/returns" onClick={handleLinkClick}>
                <div className='text-white text-base'>Exchanges & Returns</div>
              </Link>
            </div>
            <DrawerFooter>
              <div className='flex gap-2 justify-end'>
                <Link href="https://github.com/m1tra/OOO-gvozdoder">
                  <Github className='text-neutral-300' strokeWidth={1} />
                </Link>
              </div>
            </DrawerFooter>
            </DrawerContent>
          </Drawer>

            <div className='flex gap-4'>
                <Link href="https://github.com/m1tra/OOO-gvozdoder">
                  <Github className='text-neutral-300' strokeWidth={1} />
                </Link>
              <DialoAuth/>
            </div>
        </div>
    </div>
  )
}