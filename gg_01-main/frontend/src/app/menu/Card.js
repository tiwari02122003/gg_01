// import { useEffect, useState } from 'react';
// import MenuCard from '../components/Menucard';
// import SubcategoryButton from '../components/Subcategorybutton';

// export default function Card() {
//   const [menuItems, setMenuItems] = useState([]);
//   const [subcategoryItems, setSubcategoryItems] = useState({}); 
//   const [visibleSubcategories, setVisibleSubcategories] = useState([]); 

//   useEffect(() => {
//     async function fetchMenuItems() {
//       const response = await fetch('/api/menu');
//       const data = await response.json();
//       setMenuItems(data);

      
//       const groupedItems = data.reduce((acc, item) => {
//         acc[item.sub_category] = acc[item.sub_category] || [];
//         acc[item.sub_category].push(item);
//         return acc;
//       }, {});
//       setSubcategoryItems(groupedItems);
//     }

//     fetchMenuItems();
//   }, []);

//   const toggleSubcategory = (subcategory) => {
//     setVisibleSubcategories((prev) =>
//       prev.includes(subcategory)
//         ? prev.filter((cat) => cat !== subcategory) 
//         : [...prev, subcategory] 
//     );
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-semibold mb-4">Menu</h1>

//       <div className="mb-4">
//         {Object.keys(subcategoryItems).map((subcategory) => (
//           <div key={subcategory}>
           
//             <SubcategoryButton
//               key={subcategory}
//               subcategory={subcategory}
//               onClick={() => toggleSubcategory(subcategory)}
//             />

            
//             {visibleSubcategories.includes(subcategory) && (
//               <div className="grid grid-cols-3 gap-4 mt-4">
//                 {subcategoryItems[subcategory].map((item) => (
//                   <MenuCard key={item.id} item={item} />
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';
import MenuCard from '../components/Menucard';
import SubcategoryButton from '../components/Subcategorybutton';

export default function Card() {
  const [menuItems, setMenuItems] = useState([]); 
  const [subcategoryItems, setSubcategoryItems] = useState({}); 

  useEffect(() => {
    async function fetchMenuItems() {
      const response = await fetch('/api/menu');
      const data = await response.json();
      setMenuItems(data);

   
      const groupedItems = data.reduce((acc, item) => {
        acc[item.sub_category] = acc[item.sub_category] || [];
        acc[item.sub_category].push(item);
        return acc;
      }, {});
      setSubcategoryItems(groupedItems);
    }

    fetchMenuItems();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Menu</h1>

    
      <div className="mb-4">
        {Object.keys(subcategoryItems).map((subcategory) => (
          <div key={subcategory} className="mb-6">
           
            {/* <SubcategoryButton
              key={subcategory}
              subcategory={subcategory}
              onClick={() => console.log(`${subcategory} clicked`)} // Optional action for the button
            /> */}

           
            <div className="grid grid-cols-3 gap-4 mt-4">
              {subcategoryItems[subcategory].map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

