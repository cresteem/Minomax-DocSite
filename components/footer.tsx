import Link from "next/link";
import { RiGithubFill, RiNpmjsFill, RiTelegramFill } from "react-icons/ri";
import CresteemBrandMark from "./utils/cresteem-logo";
import Logo from "./utils/minomax-logo";

export default function Footer() {
  const footerNavs = [
    {
      href: "/docs",
      name: "Documentation",
    },
    {
      href: "/about",
      name: "About",
    },
    {
      href: "/blogs",
      name: "Blogs",
    },
    {
      href: "/sponsors",
      name: "Sponsors",
    },
  ];

  return (
    <footer
      className="text-gray-500 px-4 pb-5 pt-[10%] md:pt-[3%] w-full md:px-8 border-t"
      style={{ margin: 0 }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-lg mx-auto text-center">
          <div className="">
            <Logo className="w-20 mx-auto text-primary" />
            <p className="font-bold ml-2 text-xl text-primary tracking-widest text-center">
              Minomax
            </p>
          </div>

          <p className="leading-relaxed mt-2 text-[15px] text-justify px-4 sm:px-0">
            Minomax is a versatile and powerful optimization tool designed to
            elevate the performance of your web projects. Whether you're a
            developer focused on improving load times or a business committed to
            delivering a seamless user experience, Minomax provides the
            comprehensive solution you need. By compressing images, videos, and
            web documents, and generating optimized content tailored for various
            devices, Minomax ensures your website runs faster, saves bandwidth,
            and delivers an exceptional experience across all platforms.
          </p>
        </div>
        <ul className="text-center items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
          {footerNavs.map((item, idx) => (
            <li className=" hover:text-gray-800" key={idx}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 items-center justify-between flex flex-col lg:flex-row gap-y-5">
          <div className="mt-4 sm:mt-0 text-center">
            <Link
              href="https://github.com/cresteem/Minomax/blob/main/LICENSE"
              target="_blank"
            >
              &copy; 2024 Minomax licensed under Apache-2.0.
            </Link>
          </div>
          <Link
            href="https://cresteem.com/"
            target="_blank"
            about="blank"
            aria-label="This website is built by cresteem.com"
            style={{ zIndex: 200 }}
            className="flex justify-center items-center gap-x-2 relative text-gray-600"
          >
            {" "}
            Powered By
            <CresteemBrandMark classNames="h-4" />
          </Link>
          <Link
            href="https://darsan.in/"
            target="_blank"
            about="blank"
            aria-label="This website is designed & built by darsan.in"
            className="flex justify-center items-center gap-x-2 relative text-gray-600"
          >
            Built By{" "}
            <span className="font-semibold text-green-500 underline">
              DARSAN✅
            </span>
          </Link>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4 justify-center">
              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <Link
                  href="https://github.com/cresteem/Minomax"
                  target="_blank"
                >
                  <RiGithubFill className="w-6 h-6 text-black" />
                </Link>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <Link
                  href="https://www.npmjs.com/package/@cresteem/minomax"
                  target="_blank"
                >
                  <RiNpmjsFill className="w-6 h-6 text-red-500" />
                </Link>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <Link href="https://t.me/cresteem/8" target="_blank">
                  <RiTelegramFill className="w-6 h-6 text-[#0088cc]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
