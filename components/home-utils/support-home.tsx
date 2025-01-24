import { RiGithubFill, RiTelegramFill } from "react-icons/ri";

export default function SupportHome() {
  const contactMethods = [
    {
      icon: <RiGithubFill size={30} />,
      title: "Follow us on GitHub",
      desc: "To file new issues, contribute to the project, and check the latest status updates.",
      link: {
        name: "Explore Repository",
        href: "https://github.com/cresteem/Minomax",
      },
    },
    {
      icon: <RiTelegramFill size={30} />,

      title: "Join us on Telegram",
      desc: "For quick troubleshooting, integration assistance, and real-time user support.",
      link: {
        name: "Ask your Questions",
        href: "https://t.me/cresteem/6",
      },
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-12 md:px-8 lg:flex">
        <div className="max-w-md">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Stay Connected & Contribute
          </h3>
          <p className="mt-3">
            Whether you&apos;re just getting started with Minomax or running
            into issues, we&apos;ve got you covered.
          </p>
        </div>
        <div>
          <ul className="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0">
            {contactMethods.map((item, idx) => (
              <li
                key={idx}
                className="space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none"
              >
                <div className="w-12 h-12 rounded-full border flex items-center justify-center text-gray-700">
                  {item.icon}
                </div>
                <h4 className="text-gray-800 text-lg font-medium xl:text-xl">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
                <a
                  href={item.link.href}
                  className="flex items-center gap-1 text-sm text-primary duration-150 hover:text-indigo-400 font-medium"
                  target="_blank"
                >
                  {item.link.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
