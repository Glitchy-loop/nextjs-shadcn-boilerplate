import Image from "next/image"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Link from "next/link"
import { Button } from "./ui/button"

const Footer = () => {
  return (
    <MaxWidthWrapper className="relative z-10">
      <footer className="dark:bg-stone-950 border-t">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="/logo.png"
                className="h-8 w-8"
                alt="D-NTT Logo"
                width={32}
                height={32}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                D-NTT
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-foreground sm:mb-0">
              <li>
                <Link href="#">
                  <Button variant={"link"}>About</Button>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Button variant={"link"}>Privacy Policy</Button>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Button variant={"link"}>Licensing</Button>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Button variant={"link"}>Contact</Button>
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6  sm:mx-auto lg:my-8" />
          <span className="block text-sm sm:text-center text-muted-foreground">
            © {new Date().getFullYear()}
            <Link href="/">
              <Button variant={"link"} className="text-foreground">
                D-NTT™
              </Button>
            </Link>
            All Rights Reserved.
          </span>
        </div>
      </footer>
    </MaxWidthWrapper>
  )
}

export default Footer
