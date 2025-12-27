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
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 text-center space-y-10">
        {/* Title */}
        <h2 className="mt-10 text-2xl md:text-4xl font-serif italic text-gray-700">
          {title}
        </h2>

        {/* Image */}
        <div className="mx-auto max-w-5xl flex justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1600}
            height={900}
            className="w-[50%] h-auto object-cover aspect-square"
            priority
          />
        </div>

        {/* Subtitle */}
      </div>
    </section>
  );
}
