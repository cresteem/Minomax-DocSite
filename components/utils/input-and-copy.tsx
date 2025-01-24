export default function InputAndCopy({
  source,
  successCallback,
}: {
  source: string;
  successCallback: () => void;
}) {
  return (
    <div className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white">
      <div
        onClick={() => {
          navigator.clipboard
            .writeText(source)
            .then(successCallback)
            .catch((err) => {
              console.error("Failed to copy text: ", err);
            });
        }}
        className="inline-block rounded-full px-3 py-1 bg-primary text-white cursor-pointer"
      >
        Copy
      </div>
      <input
        disabled
        className="w-[14rem] font-normal tracking-wider placeholder:text-black bg-white cursor-text"
        placeholder={source}
      />
    </div>
  );
}
