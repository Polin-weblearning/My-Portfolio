import { useState } from "react";
import { motion } from "framer-motion";
import aboutImg1 from "../assets/aboutimg1.jpg";
import aboutImg4 from "../assets/aboutimg4.jpg";
import aboutImg3 from "../assets/aboutimg3.jpg";
import aboutImg5 from "../assets/aboutimg5.jpg";
import aboutImg6 from "../assets/aboutimg6.jpg";
import aboutImg7 from "../assets/aboutimg7.jpg";
const images = [
  aboutImg1,
  aboutImg4,
  aboutImg3,
  aboutImg5,
  aboutImg6,
  aboutImg7,
];

const Design = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        My Designs
      </motion.h1>

      <div className="border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">
          About<span className="text-neutral-500"> Me</span>
        </h1>

        {/* ✅ Image Grid (2 on mobile, 3 on large screens) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`about-${index}`}
                className="rounded-2xl w-full object-cover shadow-md hover:scale-105 transition-transform duration-200"
              />
            </motion.div>
          ))}
        </div>

        {/* ✅ Modal for full image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Full View"
              className="max-w-full max-h-full rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Design;
