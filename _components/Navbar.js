
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { FaShoppingCart } from "react-icons/fa"; 

const Navbar = () => {
  const router = useRouter();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/under", label: "Products" },
    { href: "/under", label: "About" },
    { href: "/under", label: "Contact" },
  ];

  return (
    <nav className="bg-[#093630] text-white flex justify-between items-center px-8 py-4 shadow-md ">
    <Image
      src="/logo.png"
      alt="Garage Door"
      width={90}
      height={70}

      className="rounded-md "
      style={{ filter: "drop-shadow(2px 4px 6px black)" }}
    />

    <div className="flex space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-2 transition-colors ${
            router.pathname === item.href ? "font-semibold" : ""
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>

    <Link
      href="/cart"
      className="flex gap-2 items-center hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-2 transition-colors"
    >
     <div className="bg-white rounded-full h-[40px] w-[40px] flex items-center justify-center">
     <FaShoppingCart className="mr-2 fill-[#093630] relative left-[3px]" />
     </div>
      Cart
    </Link>
  </nav>
  );
};

export default Navbar;

