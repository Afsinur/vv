"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ValueItem = {
  title: string;
  description: string;
};

type InstitutionalProfileProps = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  values: ValueItem[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function InstitutionalProfile({
  title,
  description,
  image,
  values,
}: InstitutionalProfileProps) {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        {/* LEFT TEXT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:col-span-1 self-center"
        >
          <h2 className="text-[36px] font-semibold tracking-wide text-[#1c387c] mb-6">
            {title}
          </h2>

          <p className="text-[16px] leading-7 text-gray-700">{description}</p>
        </motion.div>

        {/* CENTER IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="lg:col-span-1 flex justify-center self-center"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={420}
            height={520}
            className="object-contain w-full hover:scale-[130%] scale-[125%]"
          />
        </motion.div>

        {/* RIGHT VALUES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="lg:col-span-1 space-y-10"
        >
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h4 className="text-[18px] font-semibold text-[#1c387c] mb-2">
                {item.title}
              </h4>
              <p className="text-[15px] leading-7 text-gray-700 font-normal">
                {item.description}
              </p>

              {idx !== values.length - 1 && (
                <div className="h-px bg-black/20 mt-6" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
