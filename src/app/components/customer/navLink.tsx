"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface navLinkProps {
  href: string;
  label: string;
  activeIcon: string;
  inactiveIcon: string;
}
export function NavLink({
  href,
  label,
  activeIcon,
  inactiveIcon,
}: navLinkProps) {
  const pathname = usePathname();
  const isActive = pathname.includes(href);
  return (
    <Link
      href={href}
      className={`
        group cursor-pointer 
        ${isActive ? "text-main font-bold" : "text-gray-shade"} 
        hover:text-main hover:font-bold 
        duration-200 ease-in-out 
        flex items-center gap-2 text-lg font-semibold
      `}
    >
      <Image
        alt={`${label}-icon-active`}
        src={activeIcon}
        width={30}
        height={30}
        className={`
          ${isActive ? "block" : "hidden"} 
          group-hover:block
        `}
      />
      <Image
        alt={`${label}-icon-inactive`}
        src={inactiveIcon}
        width={30}
        height={30}
        className={`
          ${isActive ? "hidden" : "block"} 
          group-hover:hidden
        `}
      />
      {label}
    </Link>
  );
}
