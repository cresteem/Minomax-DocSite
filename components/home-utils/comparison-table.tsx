export default function ComparisonTable() {
  return (
    <section className="py-5 mt-5 leading-loose tracking-wide">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative z-10 max-w-2xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-bold sm:text-4xl text-center">
            Why Every <span className="text-primary">Website</span> Needs{" "}
            <span className="text-primary">Minomax</span>?
          </h3>
          <p className="mt-3 text-justify leading-loose">
            Every website can benefit from Minomax by automating critical web
            optimization tasks. It compresses images, videos, and web documents
            (like CSS, JS, HTML), transforming and optimizing them for better
            performance. Minomax also generates responsive image sets, including
            the ability to link video thumbnails and convert{" "}
            <em className="text-primary">&lt;img/&gt;</em> tag into{" "}
            <em className="text-primary">&lt;picture&gt;</em>
            tags for multi-device compatibility. With these features, it ensures
            faster load times, improved SEO, and a seamless user experience
            across all platforms.
          </p>
        </div>

        <div className="border xl:w-[70%] my-10 rounded-xl overflow-scroll md:overflow-hidden mx-auto border-gray-300">
          <table
            id="compare"
            className="table-auto text-left text-[12.5px] md:text-md tracking-wider leading-loose"
          >
            <thead>
              <tr className="bg-gradient-to-r from-primary/[50%] to-primary text-white">
                <th className="border border-gray-300 px-4 py-2">Feature</th>
                <th className="border border-gray-300 px-4 py-2">
                  Traditional Web Optimization Tools
                </th>
                <th className="border border-gray-300 px-4 py-2">Minomax</th>
              </tr>
            </thead>
            <tbody className="font-light">
              <tr>
                <td>Setup Process</td>
                <td>
                  <span>Complex</span> - Requires manual configuration and
                  multiple tools to cover all optimization needs.
                </td>
                <td>
                  <span>Streamlined</span> - Minomax simplifies setup with an
                  all-in-one approach.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td>Compression Quality</td>
                <td>
                  <span>Inconsistent</span> - Varies across tools and may
                  compromise quality.
                </td>
                <td>
                  <span>High</span> - Achieves up to 97% image, 93% video, and
                  25% web document compression while almost preserving quality.
                </td>
              </tr>
              <tr>
                <td>Automation</td>
                <td>
                  <span>Limited</span> - Most tasks require manual intervention
                  or separate scripts.
                </td>
                <td>
                  <span>Comprehensive</span> - Automates image, video, and web
                  document compression, generates image sets, and leverages the
                  modern &lt;picture&gt; tag with media queries for responsive
                  design.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td>Device-Specific Optimization</td>
                <td>
                  <span>Manual</span> - Generating responsive content for
                  various devices requires extra effort.
                </td>
                <td>
                  <span>Effortless</span> - Automatically generates responsive
                  image sets with device-specific resolutions to reduce traffic,
                  along with video thumbnails for better accessibility.
                </td>
              </tr>
              <tr>
                <td>Integration</td>
                <td>
                  <span>Basic</span> - Limited to specific tools or platforms.
                </td>
                <td>
                  <span>Versatile</span> - Seamlessly integrates with CI/CD
                  pipelines, APIs, and command-line tools.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td>Customizability</td>
                <td>
                  <span>Rigid</span> - Minimal options for customization without
                  additional coding.
                </td>
                <td>
                  <span>Flexible</span> - Adapts to diverse use cases, from
                  small projects to enterprise-level workflows.
                </td>
              </tr>
              <tr>
                <td>Performance</td>
                <td>
                  <span>Average</span> - May not leverage advanced
                  multi-threading or optimization algorithms.
                </td>
                <td>
                  <span>Optimized</span> - Enhances performance using advanced
                  compression techniques and multi-threading.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
