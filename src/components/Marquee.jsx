import { motion } from "framer-motion";
/* eslint-disable react/prop-types */
const Marquee = ({ images, direction }) => {
  return (
    <div className="flex overflow-hidden w-full">
      <motion.div
        initial={{ x:direction=="left" ? "0%" : "-100%" }}
        animate={{ x:direction=="left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 15, repeat:Infinity}}
        className=" p-5 h-fit gap-35 m-10 my-5 flex flex-shrink-0"
      >
        {images.map((image, idx) => {
          return <img key={idx} src={image} alt="image" />;
        })}
      </motion.div>
      <motion.div
         initial={{ x:direction=="left" ? "0%" : "-100%" }}
         animate={{ x:direction=="left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 15, repeat:Infinity}}
        className=" p-5 h-fit gap-35 m-10 my-5 flex flex-shrink-0"
      >
        {images.map((image, idx) => {
          return <img key={idx} src={image} alt="image" />;
        })}
      </motion.div> 
    </div>
  );
};

export default Marquee;
