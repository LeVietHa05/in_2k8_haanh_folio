export function Video({ _link }: { _link: string }) {
  return (
    <video width="338" height="600"  autoPlay={true} loop={true} muted>
      <source src={_link} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
