import Image from "next/image";

export function MediaFrame({ src, alt, className, priority = false, sizes }) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes ?? "(max-width: 980px) 100vw, 50vw"}
      />
    </div>
  );
}


