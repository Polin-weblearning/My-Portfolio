import { useState, useEffect } from "react";
import { HERO_CONTENT } from "./../constants/index";
import profilePic from "../assets/polin.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const [isDeveloper, setIsDeveloper] = useState(true); 
  useEffect(() => {
    const interval = setInterval(() => {
      setIsDeveloper((prev) => !prev); 
    }, 3000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="border-neutral-900 pb-4 lg:mb-35"
    >
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Ath Polin
            </motion.h1>

            <motion.span
              key={isDeveloper ? "developer" : "designer"} 
              initial={{ opacity: 0, y: 50 }}  
              animate={{ opacity: 1, y: 0 }}  
              exit={{ opacity: 0, y: -50 }} 
              transition={{ duration: 1 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              {isDeveloper ? "Front-End Developer" : "UX/UI Designer"}
            </motion.span>

            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="my-2 max-w-xl py-6"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img src={profilePic} alt="ath polin" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
