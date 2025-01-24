import InputAndCopy from "../utils/input-and-copy";

export default function Hero() {
  return (
    <section className="py-[5%] xl:py-14 mt-6 sm:mt-0 w-[100%] relative overflow-hidden max-w-screen-2xl mx-auto">
      <div className="flex-none space-y-5 max-w-xl pl-10 pt-5 ml-5">
        <InputAndCopy
          source="npm install @cresteem/minomax"
          successCallback={() => {
            alert("Now paste it on terminal: ctrl + v");
          }}
        />
        <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
          Serve Web{" "}
          <span className="bg-gradient-to-r from-primary/[65%] to-primary bg-clip-text text-transparent">
            Faster, Smoother & Better
          </span>
        </h1>
        <p>
          Effortlessly{" "}
          <em className="text-primary">
            compress videos, images, and web documents{" "}
          </em>
          while integrating seamlessly into your{" "}
          <em className="text-primary">CI/CD pipeline</em>. Minomax ensures your
          website is always optimized, faster, and ready to deliver an
          exceptional user experience.
        </p>
        <div className="flex items-center gap-x-3 sm:text-sm">
          <a
            href="/docs"
            className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-primary duration-150 hover:bg-primary/[90%] active:bg-primary/[90%] rounded-full md:inline-flex"
          >
            Get started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="/#features"
            className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex"
          >
            View Features
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="pb-[10rem]">
        <div id="snake">
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
        </div>
      </div>
    </section>
  );
}
