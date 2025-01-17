import { RiGithubFill, RiGlobalLine, RiLinkedinFill } from "react-icons/ri";

export default function Credit() {
  const team: {
    avatar: string;
    name: string;
    title: string;
    linkedin: string;
    github: string;
    website: string;
  }[] = [
    {
      avatar: "/images/author/darsan.webp",
      name: "DARSAN",
      title: "Software Engineer & Tech Consultant",
      linkedin: "https://www.linkedin.com/in/darsan-in/",
      github: "https://github.com/darsan-in",
      website: "https://darsan.in/",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-10 flex flex-col justify-center items-center">
      <div className="max-w-xl">
        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl text-center">
          Meet the Author
        </h3>

        <p className="text-gray-600 mt-3 text-justify">
          Minomax was created by Darsan, the founder of{" "}
          <a href="https://cresteem.com/" className="link">
            Cresteem
          </a>
          . With experience in full-stack development, SEO, and cloud
          technologies, Darsan has worked on various projects like{" "}
          <a href="https://hawkjs.cresteem.com/" className="link">
            Hawk.js
          </a>
          ,{" "}
          <a href="https://richiejs.cresteem.com/" className="link">
            Richie.js
          </a>
          ,{" "}
          <a
            href="https://www.npmjs.com/package/@iamspdarsan/div-js"
            className="link"
          >
            Div.js
          </a>
          ,{" "}
          <a href="https://bonse.cresteem.com/" className="link">
            BONSE
          </a>
          , and <em className="text-primary">30+</em> projects. As a software
          engineer and open-source contributor, Darsan focuses on creating
          practical, effective solutions for web development and performance
          optimization. With <em className="text-primary">2 years</em> of
          industry experience and <em className="text-primary">7 years</em> of
          programming expertise, he is dedicated to creating tools that simplify
          workflows and enhance digital innovation. Explore more of his work at{" "}
          <a href="https://darsan.in/" className="link">
            darsan.in
          </a>
        </p>
      </div>
      <div className="mt-12">
        <ul className="flex justify-center items-center">
          <li className="flex gap-4 items-center">
            <div className="flex-none w-24 h-24">
              <img
                src={team[0].avatar}
                className="w-full h-full rounded-full"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-gray-700 font-semibold sm:text-lg">
                {team[0].name}
              </h4>
              <p className="text-deep">{team[0].title}</p>
              <div className="mt-3 flex gap-4 text-white">
                <a href={team[0].github} target="_blank">
                  <RiGithubFill className="w-7 h-7 rounded-full bg-black p-1" />
                </a>
                <a href={team[0].linkedin} target="_blank">
                  <RiLinkedinFill className="w-7 h-7 rounded-full bg-blue-600 p-1" />
                </a>
                <a href={team[0].website} target="_blank">
                  <RiGlobalLine className="w-7 h-7 rounded-full bg-blue-500 p-1" />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
