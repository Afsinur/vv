import Image from "next/image";

type HeroIntroProps = {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  subtitle?: string;
};

export default function HeroIntro({
  imageSrc,
  imageAlt = "",
  title,
  subtitle,
}: HeroIntroProps) {
  return (
    <section className="w-full bg-[#fdfaf6] py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Image */}
        <div className="mx-auto max-w-5xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Title */}
        <h2 className="mt-10 text-2xl md:text-3xl font-serif italic text-gray-700">
          {title}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-3 text-base md:text-lg font-serif italic text-gray-500">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
