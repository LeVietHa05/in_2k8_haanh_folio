export function Video({ _link }: { _link: string }) {
  return (
    <video width="1120" height="371" controls autoPlay={true} preload="none">
      <source src={_link} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
