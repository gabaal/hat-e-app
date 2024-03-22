import Link from "next/link";
export default function Navbar() {
  <>
    <nav className="bg-green-500 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">Home</Link>

        <Link href="/about-us">About us</Link>

        <Link href="/shop">All hats</Link>

        <Link href="/shop/caps">Caps</Link>

        <Link href="/shop/other-hats">beanies</Link>
      </div>
    </nav>
  </>;
}
