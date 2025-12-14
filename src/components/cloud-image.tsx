export type ImageProps = {
  src: string;
  alt: string;
  height: number | null;
  width: number | null;
};

export function CloudImage({ src, alt, height, width }: ImageProps) {
  return (
    <img
      alt={alt}
      src={src}
      height={height ?? undefined}
      width={width ?? undefined}
    />
  );
}
