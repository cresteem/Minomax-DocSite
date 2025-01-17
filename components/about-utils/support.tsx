export default function Support() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mb-10 mt-5 flex flex-col justify-center items-center">
      <div className="max-w-xl">
        <h4 className="text-gray-800 text-3xl font-semibold sm:text-4xl text-center">
          Licensing
        </h4>
        <p className="text-gray-600 mt-3 text-center">
          <a
            className="bl"
            target="_blank"
            href="https://github.com/cresteem/Minomax"
          >
            Minomax
          </a>{" "}
          is licensed under the{" "}
          <a
            className="bl"
            target="_blank"
            href="https://www.apache.org/licenses/LICENSE-2.0"
          >
            Apache License 2.0.
          </a>
        </p>

        <h4 className="mt-10 text-gray-800 text-3xl font-semibold sm:text-4xl text-center">
          Support
        </h4>
        <p className="text-gray-600 mt-3 text-center ">
          For any questions, please reach out via{" "}
          <a
            href="mailto:connect@cresteem.com"
            className="text-blue-600"
            target="_blank"
          >
            connect@cresteem.com
          </a>
        </p>
      </div>
    </div>
  );
}
