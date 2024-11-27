
export default function MenuCard({ item }) {
    return (
      <div className="card w-60 m-4  p-4 relative group transition-all duration-300 hover:shadow-lg hover:shadow-slate-600">
        <img src={item.photo} alt={item.item_name} className="w-full h-40 object-cover" />
        <h3 className="text-lg font-semibold mt-2 text-green-500 font-mono ">{item.item_name}</h3>
        <h3 className="text-sm font-semibold mt-2 text-green-500 font-mono ">{item.description}</h3>
        <h3 className="text-sm font-semibold mt-2 text-green-500 font-mono ">{item.category}</h3>
        <div className= "flex justify-between pt-4">
          <h2>{item.amount}</h2>
          <button className="bg-yellow-300 rounded-md border-s-green-700 text-sm w-20 font-serif ">Add to cart</button>
        </div>
      </div>
    );
  }
  