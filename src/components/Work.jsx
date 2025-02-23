/* eslint-disable no-unused-vars */
import { motion, useMotionValueEvent, useScroll } from "framer-motion" 
import { useState } from "react";
const Work = () => {

  const [images, setimages] = useState(
    [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "58%",
      left: "43%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "42%",
      left: "58%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "65%",
      left: "46%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "63%",
      left: "58%",
      isActive: false,
    },
    {
      url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "55%",
      left: "52%",
      isActive: false,
    }
  ])
  const { scrollYProgress } = useScroll();
  
  scrollYProgress.on("change",(data)=>{
    function showImg(arr){
      setimages((prev)=>{
        return prev.map((item, idx) =>{
          return arr.indexOf(idx)=== -1 ?
          {...item, isActive: false } :
          {...item, isActive: true }
        })
      })
    }

    switch (Math.floor(data * 100)) {
      case 0: showImg([])
        break;
      case 1: showImg([0])
        break;
      case 2: showImg([0,1])
        break;
      case 5: showImg([0,1,2])
        break;
      case 7: showImg([0,1,2,3])
        break;
      case 10: showImg([0,1,2,3,4])
        break;
      case 12: showImg([0,1,2,3,4,5])
        break;
    
      default:
        break;
    }
  })
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto relative mt-15">
        <h1 className="text-[25vw] leading-none select-none text-center font-medium tracking-tight ">
          Work
        </h1>
        <div className="w-full  h-full absolute top-0 left-0 ">
          {images.map((img, idx) => {
            return (
              img.isActive && (
                <img
                  key={idx}
                  className="absolute h-50 w-50 object-cover   rounded-2xl"
                  style={{ top: img.top, left: img.left }}
                  src={img.url}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
