/* eslint-disable react/prop-types */
import { FiCornerDownRight } from "react-icons/fi";

const Button = ({title = "Make A Project"}) => {
  return (
    <div className="bg-white text-black text-sm py-2 px-3 rounded-full hover:scale-110 cursor-pointer w-40 text-center flex items-center justify-between">
      {title}
      <FiCornerDownRight />
    </div>
  )
}

export default Button
