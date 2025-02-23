import Button from "./Button"

/* eslint-disable react/prop-types */
const Product = ({data , mover , index}) => {
  return (
    <div onMouseEnter={()=>mover(index)} className="w-full h-[23rem] text-white hover:bg-blue-900 py-20 ">
      <div  className="max-w-screen-xl mx-auto flex justify-between items-center px-15">
        <h1 className="text-5xl">{data.title}</h1>
      <div className="w-1/3 flex flex-col gap-10">
        <p className="text-lg">{data.description}</p>
        <div className="flex gap-3">
            { data.live && <Button /> }
            { data.case && <Button title="Case Study" />}
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default Product
