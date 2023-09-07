import Data from "./Data.jsx"

const Card = () => {

  return (
    <div className="grid grid-cols-3 gap-10 p-20">
   {Data.map((datas) => {
    return (
        <>
        <div className="card  bg-base-100 shadow-xl cursor-pointer">
        <figure><img className=" h-[300px]" src={datas.image} alt={datas.id} /></figure>
  <div className="card-body">
    <h2 className=" text-2xl font-semibold">{datas.productName}</h2>
    <p>Price: {datas.product}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
        </div>
    
    </>
    )
    
   }
   
   )}
</div>
  )
}

export default Card
