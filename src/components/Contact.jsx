import { CONTACT } from "../constants";
import { motion } from "framer-motion";
const Contact1 = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="my-4 text-center"
      >
        {CONTACT.address}
      </motion.p>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-4 text-center"
      >
        {CONTACT.phoneNo}
      </motion.p>
      <motion.a
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        href="#"
        className=" text-center block"
      >
        {CONTACT.email}
      </motion.a>
    </div>
  );
};

export default Contact1;
