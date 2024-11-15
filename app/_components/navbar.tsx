"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <Image
          src={"/Logo.svg"}
          alt={"Logo"}
          width={133}
          height={39}
          className={""}
        />
        <Link
          href={"/"}
          className={
            pathName === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href={"/transactions"}
          className={
            pathName === "/transactions"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
      </div>
      <UserButton showName />
    </nav>
  );
};

export default Navbar;
