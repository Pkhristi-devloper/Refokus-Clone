/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ width, hover="false" }) => {
  return (
    <motion.div whileHover={{backgroundColor: hover === "true" && "#7443ff", padding:"40px"}} className={`${width} min-h-80 flex flex-col rounded-2xl bg-zinc-800 p-5`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h1>One Heading</h1>
          <FaArrowRight />
        </div>
        <h1 className="mt-8 text-3xl font-semibold">Heading 1</h1>
      </div>
      {width == "basis-2/3" && (
        <>
          <h1 className="text-7xl mt-30">Start a Project</h1>
          <button className="w-fit rounded-full flex justify-self-start mt-5 px-5 py-2 border-[1px] border-zinc-300 hover:bg-zinc-900 active:scale-90 hover:scale-105 cursor-pointer">
            Contact Us
          </button>
        </>
      )}
      {width == "basis-1/3" && (
        <p className="mt-51">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          dolores!
        </p>
      )}
    </motion.div>
  );
};

export default Card;
