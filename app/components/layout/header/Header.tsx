import { LinksFunction } from "@remix-run/server-runtime";
import {
  Logo,
  links as logoLinks,
} from "~/components/layout/header/headerLogo/HeaderLogo";
import { Nav } from "../nav/nav";

export const links: LinksFunction = () => [...logoLinks()];

export function Header() {
  return (
    <header className="border-grey-100 flex items-center justify-between border-b border-solid p-4 dark:border-none dark:bg-gray-800 md:px-8">
      <Logo />
      <Nav />
    </header>
  );
}
