"use client";

import { Container, Text } from "@radix-ui/themes";
import Link from "next/link";
import { Sun, Moon, Menu } from "lucide-react";
import React from "react";
import ProfileButton from "../ui/custom/ProfileButton";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";


export type Route = {
  href: string;
  label: string;
};

const routes: Route[] = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#service",
    label: "Service",
  },
  {
    href: "#feature",
    label: "Feature",
  },
  {
    href: "#project",
    label: "Project",
  },
  {
    href: "#blog",
    label: "Blogs",
  },
  {
    href: "https://calendly.com/mayur_tikundi/30min",
    label: "Contact Us 🤙",
  },
];

const RadixHeader = () => {
  const { theme, setTheme } = useTheme();

  function navRoutes(routes: Route[]) {
    return routes.map((route: Route, i: number) => (
      <Button key={i} asChild variant="ghost" className="px-12 md:px-1 ">
        <Link href={route.href}> 
        <h1>{route.label}</h1>
        </Link>
      </Button>
    ));
  }

  return (
    <header className="sm:flex flex-col sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[600] sm:w-[400]">
                <nav className="flex flex-col gap-4">{navRoutes(routes)}</nav>
              </SheetContent>
            </Sheet>
            <Link href={"/"} className="ml-4 lg:ml-0">
              <h1 className=" text-2xl font-bold">Bizmorphic</h1>
            </Link>
          </div>
          <nav className=" mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
            {navRoutes(routes)}
          </nav>
          <div className="flex items-center">
           
            <Button
              variant={"link"}
              aria-label="Toggle Theme"
              className="mr-2"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              <Sun className=" h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute top-1/3 h-6 w-6 rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>

          
          </div>
        </div>
      </Container>
    </header>
  );
};

export default RadixHeader;
