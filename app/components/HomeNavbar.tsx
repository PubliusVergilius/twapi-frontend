"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HomeNavbar() {
  return (
    <nav>
      <ul className="flex flex-row justify-around my-2 border-b-1 pb-2">
        <li>
          <Link href="/" className={`${StyleLink("/")}`}>
            Recommended
          </Link>
        </li>
        <li>
          <Link href="/following" className={`${StyleLink("/following")}`}>
            Following
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function StyleLink(path: string) {
  const _path = usePathname();
  if (path === _path) {
    return "underline";
  }
  return "no-underline";
}
