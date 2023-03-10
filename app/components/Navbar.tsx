"use client";

import { useState } from "react";
import LoginProfile from "./LoggedinProfile";
import Container from "./Container";
import Link from "next/link";
import { NAV_ITEMS } from "@/constants/navItems";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
  const login = () => setIsLoggedin(true);
  const logout = () => setIsLoggedin(false);

  // mobile drawer
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = (): void => {
    setOpen((prev) => !prev);
    document.body.classList.toggle("drawer-open");
  };

  return (
    <header className='select-none p-2'>
      <Container>
        <div className='flex items-center justify-between px-2'>
          <div className='hidden flex-1 gap-5 sm:flex'>
            {NAV_ITEMS.map((item) => (
              <Link href={item.href} key={item.href} className='btn-ghost btn'>
                {item.name}
              </Link>
            ))}
          </div>
          <div className='border-4 border-neutral p-2 text-center text-sm font-bold uppercase text-neutral sm:flex-1 sm:text-3xl'>
            flavour 4 Favor
          </div>
          <div className='flex flex-1 items-center'>
            <div className='ml-auto'>
              {isLoggedin ? (
                <LoginProfile logout={logout} />
              ) : (
                <div
                  onClick={login}
                  className='btn-ghost btn cursor-pointer text-base'
                >
                  Login
                </div>
              )}
            </div>
          </div>

          {/* mobile */}
          <div className='z-20 pl-4 sm:hidden'>
            {open ? (
              <AiOutlineClose size={20} onClick={handleOpen} />
            ) : (
              <AiOutlineMenu size={20} onClick={handleOpen} />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
