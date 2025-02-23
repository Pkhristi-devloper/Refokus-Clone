import Card from "./Card"

const Cards = () => {
  return (
    <div className="w-full ">
        <div className="max-w-screen-xl mx-auto my-10 px-10 py-10 flex items-center justify-center gap-3 ">
            <Card width={"basis-1/3"} />
            <Card width= {"basis-2/3"} hover ="true"/>
        </div>
      
    </div>
  )
}

export default Cards
