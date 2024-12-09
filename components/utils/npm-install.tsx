import { RiFileCopyLine } from "react-icons/ri";

export default function NPMInstall({ className }: { className: string }) {
  return (
    <div className={className}>
      <button className="text-gray-500 hover:text-primary absolute right-3 inset-y-0 my-auto active:text-gray-600">
        <RiFileCopyLine
          onClick={() => {
            navigator.clipboard
              .writeText("npm i @cresteem/minomax")
              .then(() => {
                alert("Now paste it on terminal: ctrl + v");
              })
              .catch((err) => {
                console.error("Failed to copy text: ", err);
              });
          }}
        />
      </button>
      <input
        type="text"
        disabled
        placeholder="npm i @cresteem/minomax"
        className="w-full pr-12 pl-3 py-2 text-center placeholder:text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
      />
    </div>
  );
}
