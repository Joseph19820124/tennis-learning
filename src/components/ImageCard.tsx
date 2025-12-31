import Image from 'next/image';

interface ImageCardProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageCard({ src, alt, caption }: ImageCardProps) {
  return (
    <figure className="rounded-lg overflow-hidden shadow-lg">
      <div className="relative w-full h-48 md:h-64">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      {caption && (
        <figcaption className="bg-gray-100 px-4 py-2 text-sm text-gray-600 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
