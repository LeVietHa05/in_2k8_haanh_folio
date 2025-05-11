export function Video({
  _link,
  width,
  height,
  className,
}: {
  _link: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <video
      width={width ? width : "338"}
      height={height ? height : "600"}
      autoPlay={true}
      loop={true}
      muted
      className={`${className} rounded-2xl`}>
      <source src={_link} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
