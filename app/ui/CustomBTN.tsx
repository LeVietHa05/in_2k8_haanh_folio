import Link from "next/link";

export default function CustomBTN({
  text,
  customClass,
  _href,
}: {
  _href?: string;
  text: string;
  customClass?: string;
}) {
  return (
    <Link href={_href ? _href : "/"}>
      <div
        className={`border border-1 border-gray-500 px-4 py-2 rounded-[10px] text-gray-500 text-[20px] w-fit ${customClass}`}>
        {text}
      </div>
    </Link>
  );
}
