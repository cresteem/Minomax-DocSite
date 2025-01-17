export default function SponsorButton({ className }: { className: string }) {
  return (
    <a
      href="https://github.com/sponsors/darsan-in"
      target="_blank"
      className={`${className} bg-primary px-6 py-2 rounded-full text-white mx-auto block w-[200px] text-center hover:bg-primary/[70%]`}
    >
      Become a sponsor
    </a>
  );
}
