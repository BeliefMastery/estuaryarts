import manifest from "@/lib/image-manifest.json";

interface ManifestEntry {
  width: number;
  height: number;
  webp: Record<string, string>;
  jpeg: string;
}

const typedManifest = manifest as Record<string, ManifestEntry>;

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  className,
  sizes = "(max-width: 940px) 100vw, 940px",
  priority = false,
}: OptimizedImageProps) {
  const entry = typedManifest[src];

  if (!entry) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
      />
    );
  }

  const webpSrcSet = Object.entries(entry.webp)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([w, url]) => `${url} ${w}w`)
    .join(", ");

  return (
    <picture style={{ display: "contents" }}>
      {webpSrcSet && <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />}
      <img
        src={entry.jpeg || src}
        alt={alt}
        width={entry.width}
        height={entry.height}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
      />
    </picture>
  );
}
