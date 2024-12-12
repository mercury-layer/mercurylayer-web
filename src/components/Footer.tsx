import { Footer as FlowbiteFooter } from "flowbite-react";
import Link from "next/link";

const Footer = () => {
  return (
    <FlowbiteFooter
      container
      className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-none">
      <div className="w-full text-center">
        <FlowbiteFooter.Copyright by="Mercury Layer Team" year={2024} />
        <Link href="/privacypolicy" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Privacy Policy</Link>
      </div>
    </FlowbiteFooter>
  );
};

export default Footer;
