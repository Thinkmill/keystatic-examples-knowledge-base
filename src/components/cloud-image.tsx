export type ImageProps = {
  src: string;
  alt: string;
  height: number;
  width: number;
};

export function CloudImage({ src, alt, height, width }: ImageProps) {
  return <img alt={alt} src={src} height={height} width={width} />;
}
