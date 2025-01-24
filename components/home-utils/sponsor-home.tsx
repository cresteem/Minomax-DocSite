import CresteemBrandMark from "../utils/cresteem-logo";
import SponsorButton from "../utils/sponsor-button";

export default function SponsorHome() {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative z-10 max-w-2xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Sponsor Minomax
          </h3>
          <p className="mt-3 text-justify leading-loose">
            Minomax is a powerful open-source project, built and maintained by{" "}
            <a
              href="https://cresteem.com/"
              className="text-deep"
              target="_blank"
            >
              Cresteem
            </a>
            , a software agency dedicated to pushing the boundaries of web
            development and SEO automation. By sponsoring Minomax, you support
            the growth of a tool that&apos;s making an impact on developers,
            businesses, and digital marketers worldwide.
          </p>
          <a href="https://cresteem.com/" target="_blank">
            <CresteemBrandMark classNames="py-10 text-black w-[80%] mx-auto" />
          </a>
        </div>
        <div className="relative mt-8 mx-auto max-w-2xl text-justify">
          <h4 className="font-bold text-primary">Why Sponsor?</h4>
          <ul className="leading-loose">
            <li>
              <span className="font-medium">Visibility:</span> Get featured on
              our website and documentation with your logo and backlink.
            </li>
            <li>
              <span className="font-medium">Priority Support:</span> Enjoy
              dedicated support and priority for feature requests.
            </li>
            <li>
              <span className="font-medium">Impact:</span> Support the
              development of a tool that empowers the community and
              revolutionizes SEO.
            </li>
          </ul>
          <a href="/sponsors" className="text-deep underline">
            Explore more about sponsorship
          </a>
          <SponsorButton className="my-8" />
        </div>
      </div>
    </section>
  );
}
