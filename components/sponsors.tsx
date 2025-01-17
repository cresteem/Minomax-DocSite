import SponsorButton from "./utils/sponsor-button";

export default function Sponsors() {
  return (
    <section className="flex flex-col justify-center items-center leading-loose pb-[8%]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-10 flex flex-col justify-center items-center">
        <div className="max-w-xl">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl text-center">
            Support Minomax
          </h3>
          <p className="text-gray-600 mt-3 text-justify">
            Minomax is a project driven by passion and a desire to improve web
            development and SEO automation. While it was not created with
            financial gain in mind, maintaining and growing an open-source
            project like Minomax requires consistent support.
          </p>
          <p className="text-gray-600 mt-3 text-justify">
            Sponsorship isn&apos;t just about providing funds; it&apos;s about
            empowering innovation. Every contribution, no matter the size, helps
            us continue improving Minomax, fixing bugs, enhancing features, and
            ensuring its ongoing development. Your support directly impacts the
            success and growth of the project.
          </p>
          <p className="text-gray-600 mt-3 text-justify">
            Open-source thrives on community involvement, and sponsorship helps
            us continue to drive this mission forward. By sponsoring Minomax,
            you&apos;re helping to shape the future of SEO automation and web
            development.
          </p>
          <p className="text-gray-600 mt-3 text-justify">
            We truly appreciate your support in helping Minomax reach new
            heights.
          </p>

          <div className="text-gray-600 pt-4">
            <h4 className="font-semibold text-[1.1em] text-black">
              Benefits of Sponsorship
            </h4>
            <p className="text-gray-600 mt-3 text-justify">
              As a sponsor of Minomax, you&apos;ll receive exclusive benefits
              that will directly support your work while helping the project
              evolve:
            </p>
            <ul className="py-3 ml-6">
              <li className="list-disc">
                <span className="font-medium">Priority Feature Requests:</span>{" "}
                Have a feature that&apos;s important to your business or
                project? As a sponsor, you can request and prioritize new
                features.
              </li>

              <li className="list-disc">
                <span className="font-medium">Active Integration Support:</span>{" "}
                Get dedicated support to seamlessly integrate Minomax into your
                systems and ensure optimized performance.
              </li>

              <li className="list-disc">
                <span className="font-medium">Early Access to Builds:</span>{" "}
                Stay ahead of the curve with early access to new builds and
                updates before they&apos;re released to the public.
              </li>

              <li className="list-disc">
                <span className="font-medium">
                  Recognition Across Our Platform:
                </span>{" "}
                Sponsors will be featured on our website, documentation, and
                README files, giving your brand visibility within the
                open-source community.
              </li>
            </ul>

            <SponsorButton className="mt-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
