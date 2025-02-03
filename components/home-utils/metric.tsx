import { RingProgress, Text } from "@mantine/core";
import { ReactElement, useEffect, useRef, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

type Metric = {
  percent: number;
  color: string;
  text: string | ReactElement;
}[];

const metrics: Metric = [
  {
    percent: 97,
    color: "#f26522",
    text: "Achieved impressive image compression with AVIF, WEBP, and JPEG formats, maintaining above 90% SSIM with minimal quality differences.",
  },
  {
    percent: 93,
    color: "#f2974e",
    text: "AV1 video compression in WEBM/MP4 containers, offering significant size reduction efficiently.",
  },
  {
    percent: 25,
    color: "#f2b37a",
    text: (
      <>
        Optimized with top configurations using tools like{" "}
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
        , cutting file sizes by approximately 25% even before Gzip or Brotli.
      </>
    ),
  },
];

export default function Metric() {
  const [currentStats, setStats] = useState<Metric>(
    metrics.map((metric) => {
      return { ...metric, percent: 0 };
    })
  );

  const statContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStats(metrics);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.95 }
    );

    if (statContainerRef.current) {
      observer.observe(statContainerRef.current);
    }

    return () => {
      if (statContainerRef.current) {
        observer.unobserve(statContainerRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section className="flex-col flex">
      <h2 className="mx-auto font-bold text-4xl py-5 my-5">
        <span className="bg-gradient-to-r from-primary/[65%] to-primary bg-clip-text text-transparent">
          Real Results, Tested and Proven:
        </span>{" "}
        See Minomax in Action
      </h2>
      <div
        ref={statContainerRef}
        className="flex flex-wrap justify-start items-center max-w-screen-lg mx-auto gap-y-10 py-10"
      >
        {currentStats.map((metric, idx) => (
          <div className="flex justify-start items-center w-[50%]" key={idx}>
            <RingProgress
              transitionDuration={2000}
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
