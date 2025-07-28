"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Desktop only */}
          <div className="hidden md:flex flex-shrink-0">
            <Link
              href="/"
              className="flex justify-center items-center h-[2.875rem] gap-[3px] p-[.3125rem] border rounded-[14px] bg-white shadow-[0_4px_6px_0_rgba(67,46,134,0.04)] border-[#ceceea]"
            >
              <Image
                src="https://clickup.com/assets/brand/logo-v3-clickup-light.svg"
                alt="ClickUp logo"
                className="w-20 h-20"
                width={180}
                height={180}
              />
              <span className="ps-[9px] font-medium text-[10px] leading-[1.2] border-s border-gray-300">
                The everything
                <br /> app, for work.
              </span>
            </Link>
          </div>

          {/* Mobile Layout - matches the provided image */}
          <div className="flex md:hidden w-full justify-between items-center">
            {/* Logo and tagline */}
            <Link
              href="/"
              className="flex items-center gap-2 p-2 border rounded-lg bg-white shadow-sm border-gray-200"
            >
              <Image
                src="https://clickup.com/assets/brand/logo-v3-clickup-light.svg"
                alt="ClickUp logo"
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <span className="text-xs font-medium text-gray-700 leading-tight">
                The everything
                <br />
                app, for work.
              </span>
            </Link>

            {/* Sign Up button and hamburger menu */}
            <div className="flex items-center gap-3">
              <Button className="flex justify-center items-center h-12 px-3 text-sm whitespace-nowrap rounded-[.5625rem] transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-500   text-white font-sans ">
                Sign Up
              </Button>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 p-0 rounded-[14px] border border-gray-200"
                  >
                    <Menu size={24} />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full p-0">
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                  <div className="flex flex-col h-full">
                    {/* Top section with Log In and Sign Up buttons */}
                    <div className="p-6 border-b border-gray-100 w-fit">
                      <div className="flex justify-start items-center h-[2.875rem] gap-[3px] p-[.3125rem] border rounded-[14px] bg-white shadow-[0_4px_6px_0_rgba(67,46,134,0.04)] border-[#ceceea]">
                        <Button
                          variant="ghost"
                          className="flex justify-center items-center h-9 px-3 text-sm whitespace-nowrap rounded-[.5625rem] text-gray-600 font-sans hover:text-gray-900"
                        >
                          Login
                        </Button>
                        <Button className="flex justify-center items-center h-9 px-3 text-sm whitespace-nowrap rounded-[.5625rem] transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-500 hover:from-indigo-600 hover:via-purple-600 hover:to-purple-600  text-white font-sans ">
                          Sign Up
                        </Button>
                      </div>
                    </div>

                    {/* Navigation menu items */}
                    <div className="flex-1 px-6 py-4">
                      <nav className="space-y-1">
                        <Button
                          variant="ghost"
                          className="w-full justify-between h-12 px-0 ps-0 text-base font-normal text-gray-700 hover:bg-gray-50"
                          onClick={() => setIsOpen(false)}
                        >
                          <span>Product</span>
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        </Button>

                        <Button
                          variant="ghost"
                          className="w-full justify-between h-12 px-0 ps-0 text-base font-normal text-gray-700 hover:bg-gray-50"
                          onClick={() => setIsOpen(false)}
                        >
                          <span>Solutions</span>
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        </Button>

                        <Button
                          variant="ghost"
                          className="w-full justify-between h-12 px-0 ps-0 text-base font-normal text-gray-700 hover:bg-gray-50"
                          onClick={() => setIsOpen(false)}
                        >
                          <span>Integrations</span>
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        </Button>

                        <Button
                          variant="ghost"
                          className="w-full justify-between h-12 px-0 ps-0 text-base font-normal text-gray-700 hover:bg-gray-50"
                          onClick={() => setIsOpen(false)}
                        >
                          <span>Resources</span>
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        </Button>

                        <Button
                          variant="ghost"
                          className="w-full justify-start h-12 px-0 text-base font-normal text-gray-700 hover:bg-gray-50"
                          onClick={() => setIsOpen(false)}
                        >
                          Pricing
                        </Button>

                        <Button
                          variant="ghost"
                          className="w-full justify-start h-12 px-0 text-base font-normal text-gray-700 hover:bg-gray-50"
                          onClick={() => setIsOpen(false)}
                        >
                          Enterprise
                        </Button>

                        <Button
                          variant="ghost"
                          className="w-full justify-start h-12 px-0 text-base font-normal text-gray-700 hover:bg-gray-50"
                          onClick={() => setIsOpen(false)}
                        >
                          Contact Sales
                        </Button>
                      </nav>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Contact Sales Button */}
            <div className="flex justify-center items-center h-[2.875rem] gap-[3px] p-[.3125rem] border rounded-[14px] bg-white shadow-[0_4px_6px_0_rgba(67,46,134,0.04)] border-[#ceceea]">
              <Button
                variant="ghost"
                className="flex justify-center items-center h-9 px-3 text-sm whitespace-nowrap rounded-[.5625rem] text-gray-600 font-sans hover:text-gray-900"
              >
                Contact Sales
              </Button>
            </div>

            {/* Auth Buttons */}
            <div className="flex justify-center items-center h-[2.875rem] gap-[3px] p-[.3125rem] border rounded-[14px] bg-white shadow-[0_4px_6px_0_rgba(67,46,134,0.04)] border-[#ceceea]">
              <Button
                variant="ghost"
                className="flex justify-center items-center h-9 px-3 text-sm whitespace-nowrap rounded-[.5625rem] text-gray-600 font-sans hover:text-gray-900"
              >
                Login
              </Button>
              <Button className="flex justify-center items-center h-9 px-3 text-sm whitespace-nowrap rounded-[.5625rem] transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-500 hover:from-indigo-600 hover:via-purple-600 hover:to-purple-600  text-white font-sans ">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
