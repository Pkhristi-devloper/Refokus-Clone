import { motion } from "framer-motion";
import Product from "./Product";
import { useState } from "react";

const Products = () => {
  const [position, setPosition] = useState(0);
  let mover = (val) => {
    setPosition(val * 23);
  };
  let data = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      case: true,
      live: false,
    },
    {
      title: "TTR",
      description:
        "TTR is a leading technology company with a strong focus on innovation and growth. We help them create a seamless, integrated and customized software solution for their clients.",
      case: true,
      live: true,
    },
    {
      title: "YIR 2022",
      description:
        "YIR 2022 is a leading global automotive and electric vehicle (AEV) company. We help them develop a more sustainable, environmentally friendly, and cost-effective AEV market.",
      case: true,
      live: false,
    },
    {
      title: "Yahoo!",
      description:
        "Yahoo! is a leading search engine company with a strong focus on innovation and growth. We help them create a more sustainable, environmentally friendly, and cost-effective search engine market.",
      case: false,
      live: false,
    },
    {
      title: "Rainfall",
      description:
        "Rainfall is a leading global rainfall prediction company with a strong focus on innovation and growth. We help them create a more sustainable, environmentally friendly, and cost-effective rainfall prediction market.",
      case: true,
      live: false,
    },
  ];
  return (
    <div className="mt-12 relative">
      {data.map((elem, idx) => {
        return <Product key={idx} data={elem} mover={mover} index={idx} />;
      })}
      <div className="w-full h-full absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: position, x: "-20%" }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          className="absolute w-[32rem] h-[23rem] left-[30%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full overflow-hidden"
          >
            <video
              className="absolute object-cover rounded-xl h-[98%] mt-[1%]"
              autoPlay
              muted
              loop
              src="/src/assets/refokus/arqitel.mp4"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full overflow-hidden"
          >
            <video
              className="absolute object-cover rounded-xl h-[98%] mt-[1%]"
              autoPlay
              muted
              loop
              src="/src/assets/refokus/rainfall.mp4"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full overflow-hidden"
          >
            <video
              className="absolute object-cover rounded-xl h-[98%] mt-[1%]"
              autoPlay
              muted
              loop
              src="/src/assets/refokus/ttr.mp4"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full overflow-hidden"
          >
            <video
              className="absolute object-cover rounded-xl h-[98%] mt-[1%]"
              autoPlay
              muted
              loop
              src="/src/assets/refokus/yahoo.mp4"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full overflow-hidden"
          >
            <video
              className="absolute object-cover rounded-xl h-[98%] mt-[1%]"
              autoPlay
              muted
              loop
              src="/src/assets/refokus/yir.mp4"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
