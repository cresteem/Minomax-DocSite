import { RingProgress, Text } from "@mantine/core";
import { ReactElement } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const metrics: {
  percent: number;
  color: string;
  text: string | ReactElement;
}[] = [
  { percent: 97, color: "#f26522", text: "Image compression with AVIF" },
  {
    percent: 93,
    color: "#f2974e",
    text: "Video compression with AV1 with WEBM/MP4",
  },
  {
    percent: 25,
    color: "#f2b37a",
    text: (
      <>
        Web Docs Minification with best available tools such as{" "}
        <a href="https://lightningcss.dev/" target="_blank" className="link">
          lightningcss
        </a>
        ,{" "}
        <a href="https://terser.org/" className="link" target="_blank">
          terser
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/kangax/html-minifier"
          target="_blank"
          className="link"
        >
          html-minifier
        </a>
      </>
    ),
  },
];

export default function Metric() {
  return (
    <section className="flex-col flex">
      <h2 className="mx-auto font-bold text-4xl py-5 my-5">
        <span className="bg-gradient-to-r from-primary/[65%] to-primary bg-clip-text text-transparent">
          Real Results, Tested and Proven:
        </span>{" "}
        See Minomax in Action
      </h2>
      <div className="flex flex-wrap justify-start items-center max-w-screen-lg mx-auto gap-y-10 py-10">
        {metrics.map((metric, idx) => (
          <div className="flex justify-start items-center w-[50%]" key={idx}>
            <RingProgress
              sections={[{ value: metric.percent, color: metric.color }]}
              label={
                <Text c={metric.color} fw={700} ta="center" size="xl">
                  {metric.percent}%
                </Text>
              }
            />
            <p className="text-lg tracking-wider px-5">{metric.text}</p>
          </div>
        ))}
        <div className="px-10 mx-5">
          {" "}
          <a
            href="https://github.com/cresteem/Minomax-Demo"
            target="_blank"
            className="flex justify-center items-center gap-x-2 underline underline-offset-4 text-primary text-lg"
          >
            Explore Demo and reports <FaArrowCircleRight className="" />
          </a>
        </div>
      </div>
    </section>
  );
}
