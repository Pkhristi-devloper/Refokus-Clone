/* eslint-disable react/prop-types */
const Stripe = ({data}) => {
   
  return (
    <div className="max-w-72 w-[16.666%] px-4 py-4 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-700 flex items-center justify-between">
      <span><img src={data.url} alt="" /></span>
      <span>{data.num}</span>
    </div>
  )
}

export default Stripe
