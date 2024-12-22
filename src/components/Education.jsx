import { EDUCATIONS } from "../constants";
import { motion } from "framer-motion";


const Education = () => {
  return (
    <div className=" border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h1>
      <div>
        {EDUCATIONS.map((Education, index) => (
          <div key={index} className="mb-8 flex flex-wrap ">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{Education.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {Education.role} -{""}{" "}
                <span className="text-sm text-purple-100">
                  {Education.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-500">{Education.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Education;
