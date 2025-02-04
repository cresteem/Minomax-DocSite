export default function InputAndCopy({
  className = "",
  source,
  successCallback,
}: {
  className?: string;
  source: string;
  successCallback: () => void;
}) {
  return (
    <div
      className={`flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white ${className}`}
    >
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
        className="flex w-full font-normal tracking-wider placeholder:text-black bg-white cursor-text"
        placeholder={source}
      />
    </div>
  );
}
