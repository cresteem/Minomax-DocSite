export default function Blogs() {
  /* const posts: { title: string; desc: string; date: string; href: string }[] = [
     {
      title: ,
      desc: ,
      date: "Wednesday, November 27th 2024",
      href: "",
    }, 
  ]; */

  return (
    <section className="mt-12 mb-[9%] mx-auto px-4 max-w-screen-lg md:px-8 leading-loose">
      <div className="max-w-lg">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Stay Ahead in Web Optimization with Minomax
        </h1>
        <p className="mt-3 text-gray-500">
          Minomax is your powerful web optimization tool, and this blog will
          share the latest techniques, tips, and news on maximizing website
          performance. From image and video compression to responsive design
          strategies, we&apos;ll provide expert advice and updates on how to
          achieve faster load times and improve user experience through smart
          optimization.
        </p>
      </div>
      <div className="mt-5 grid gap-8 divide-y md:grid-cols-2 md:divide-y-0">
        {/* {posts.map((item, idx) => (
          <article className="mt-5 pt-8 md:pt-0" key={idx}>
            <a href={item.href}>
              <span className="block text-gray-400 text-sm">{item.date}</span>
              <div className="mt-2">
                <h3 className="text-xl text-gray-900 font-semibold hover:underline">
                  {item.title}
                </h3>
                <p className="text-gray-400 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <button className="mt-2 outline-none flex items-center text-[14px] text-blue-600 decoration-blue-600 hover:underline">
                READ MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </a>
          </article>
        ))} */}
        <p>No blogs were added</p>
      </div>
    </section>
  );
}
