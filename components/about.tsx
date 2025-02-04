import Credit from "./about-utils/credit";
import Origin from "./about-utils/origin";
import Support from "./about-utils/support";

export default function About() {
  return (
    <section className="flex flex-col justify-center items-center leading-loose pb-[8%] px-6 sm:px-0">
      <Credit />
      <Origin />
      <Support />
    </section>
  );
}
