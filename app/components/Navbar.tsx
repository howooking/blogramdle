"use client";

import { useState } from "react";
import LoginProfile from "./LoggedinProfile";
import Container from "./Container";
import Link from "next/link";
import { NAV_ITEMS } from "@/constants/navItems";

export default function Navbar() {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
  return (
    <header className='bg-transparent p-2'>
      <Container>
        <div className='flex items-center justify-between px-2'>
          <div className='flex flex-1 gap-5'>
            {NAV_ITEMS.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className='flex-1 border-4 border-neutral p-3 text-center text-3xl font-bold uppercase text-neutral'>
            flavour 4 Favor
          </div>
          <div className='flex flex-1 items-center'>
            <div className='ml-auto'>
              {isLoggedin ? (
                <LoginProfile />
              ) : (
                <div className='ml-auto flex gap-5 uppercase'>
                  <div>Login</div>
                  <Link href='/contact'>contact</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
