"use client";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  return (
    <header className="p-4 flex gap-4 justify-center">
      <NextLink href={"/"}>
        <span className={StyleLink("/")}>Home</span>
      </NextLink>
      <NextLink href={"/users"} className={StyleLink("/users")}>
        Users
      </NextLink>
      <NextLink href={"/about"} className={StyleLink("/about")}>
        About
      </NextLink>
    </header>
  );
}

function StyleLink(path: string) {
  const _path = usePathname();
  if (path === _path) {
    return "underline";
  }
  return "no-underline";
}
