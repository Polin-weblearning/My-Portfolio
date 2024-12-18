import { RiReactjsLine } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tecnologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1 , y: 0}}
      initial={{opacity: 0 , y: -100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Tecnologies</motion.h2>
      <motion.div
      whileInView={{opacity: 1, x:0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 ph-4"
        >
          <FaHtml5 className="text-7xl text-orange-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 ph-4"
        >
          <IoLogoCss3  className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 ph-4"
        >
          <TbBrandJavascript className="text-7xl text-amber-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 ph-4"
        >
          <FaReact  className="text-7xl text-cyan-700" />
        </motion.div>
       
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 ph-4"
        >
          <FaBootstrap   className="text-7xl text-violet-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 ph-4"
        >
        <RiTailwindCssFill  className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tecnologies;
