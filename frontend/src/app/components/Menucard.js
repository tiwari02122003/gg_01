
export default function MenuCard({ item }) {
    return (
      <div className="card w-60 m-4 border p-4">
        <img src={item.photo} alt={item.item_name} className="w-full h-40 object-cover" />
        <h3 className="text-lg font-semibold mt-2">{item.item_name}</h3>
      </div>
    );
  }
  