import { ReactElement } from "react";
import {
  FaCompress,
  FaFileAlt,
  FaImage,
  FaMobileAlt,
  FaVideo,
} from "react-icons/fa";

export default function Features() {
  const features: { icon: ReactElement; title: string; desc: string }[] = [
    {
      icon: <FaImage />,
      title: "Image Compression",
      desc: "Compress your images in popular formats like JPEG, PNG, WebP, and AVIF with up to 96% reduction in file size, while retaining full visual quality. This significant compression leads to faster load times and a more seamless user experience across all devices.",
    },
    {
      icon: <FaVideo />,
      title: "Video Compression",
      desc: "Compress your videos with up to 93% file size reduction, supporting output formats such as WebM with AV1, MP4 (with AV1 or x265 encoding) for modern web optimization. NVIDIA acceleration further boosts processing speed, ensuring smooth performance on any device.",
    },
    {
      icon: <FaCompress />,
      title: "Web Document Minification",
      desc: "Minify your web documents (CSS, HTML, and JavaScript) to reduce file sizes by up to 70%, increasing performance and ensuring lightning-fast browsing experiences.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Image Set Generation",
      desc: "Automatically generate responsive image sets for various devices. Minomax takes care of everything, modifying the `<img>` tag to a `<picture>` tag and adding necessary media queries to serve the best image for each device, ensuring optimal performance.",
    },
    {
      icon: <FaFileAlt />,
      title: "Thumbnail Generation & Linking",
      desc: "Automatically generate video thumbnails and link them to your content, improving accessibility and user engagement, while ensuring fast load times and better SEO performance.",
    },
  ];
  return (
    <section className="py-14 leading-loose tracking-wide mt-10" id="features">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
        <h3 className="text-gray-800 text-3xl font-bold sm:text-4xl">
          Key Features of Minomax -{" "}
          <span className="bg-gradient-to-r from-primary/[65%] to-primary bg-clip-text text-transparent">
            Powered by Best Tools
          </span>
          <span className="text-primary font-semibold"></span>
        </h3>

        <div className="mt-12 max-w-screen-sm mx-auto">
          <ul className="flex flex-col gap-y-8 gap-x-12 ">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="space-y-3 hover:bg-secondary/[2%] rounded-lg p-4 border border-transparent hover:border-primary/[60%]"
              >
                <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-primary bg-primary/[10%]">
                  {item.icon}
                </div>
                <h4 className="text-lg text-primary font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
