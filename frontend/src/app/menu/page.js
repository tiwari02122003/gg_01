// import { Navbar } from "@/app/components/Navbar";
// import Image from "next/image";

// export default function Menu(){

//     const categories = [{
//         image:"/menu1.jpg",
//         title:"Pre-Work Energy Boosters"
//     },{
//         image:"/menu1.jpg",
//         title:"Post-Workout Recovery"
//     },{
//         image:"/menu1.jpg",
//         title:"Anytime Healthy Snacks"
//     },{
//         image:"/menu1.jpg",
//         title:"Beverages"
//     },{
//         image:"/menu1.jpg",
//         title:"Specialty Items"
//     }]



//     return(
//         <div>
//             <section>
//                 <Navbar />
//             </section>
//             <section className="items-center">
//                 <div className="flex justify between ">
//                     {categories.map((category, index) => (
//                     <div key={index} className="p-4">
//                         <Image
//                         src={category.image} // Correct property for image source
//                         alt={category.title} // Add an alt attribute for accessibility
//                         width={100}
//                         height={100}
//                         className="rounded-full"
//                         />
//                         <h3>{category.title}</h3>
//                     </div>
//                     ))}
//                 </div>
//             </section>

//         </div>
//     );

// }











'use client'

import { Navbar } from "@/app/components/Navbar";
import Image from "next/image";
import Card from "./Card"


export default function Menu() {
  const categories = [
    {
      image: "/menu1.jpg",
      title: "Pre-Work Energy Boosters",
    },
    {
      image: "/menu2.jpg",
      title: "Post-Workout Recovery",
    },
    {
      image: "/menu3.jpg",
      title: "Anytime Healthy Snacks",
    },
    {
      image: "/menu4.jpg",
      title: "Beverages",
    },
    {
      image: "/menu5.jpg",
      title: "Specialty Items",
    },
  ];

  const PreWorkoutBoosters = [
    "Smoothies & Shakes",
    "Light Breakfast Bowl",
    "Healthy Wraps and Sandwiches",
    "Grab-and-Go options"
  ];

  const postWorkoutRecovery=["Protein-Packed Meals","Replenishing Shakes & Drinks","Warm Options","Hydrating Snacks"]
  const anytimeHealthySnack=["Low-Calorie Bites","Veggie-Based Snacks","Sweet Yet Healthy Treats"]
  const beverages=["Freshly Pressed Juices","Kombucha","Sparkling Water with Fresh Fruit Infusion"]
  const specialityItem =["Salad Shakes","Customizable Bowls/Wraps","Superfood Smoothie Shots"]


  return (
    <div>
      <section>
        <Navbar />
      </section>

      <h2 className="text-2xl text-center mb-8 mt-5 font-mono">Our Categories</h2>
      <section className="flex justify-center overflow-x-auto mb-12">
        <div className="flex gap-6 flex-nowrap">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <Image
                src={category.image}
                alt={category.title}
                width={100}
                height={100}
                className="rounded-full mx-auto"
              />
              <h3 className="mt-4 font-semibold">{category.title}</h3>
            </div>
          ))}
        </div>
      </section>
      {/* <h2 className="text-2xl text-center mb-8 mt-5 font-mono">Pre Workout meal</h2>    
      <section className="flex flex-wrap justify-center gap-4 p-4">
        {PreWorkoutBoosters.map((meal, index) => (
          <button
            key={index}
            className=" text-white px-4 py-2 rounded shadow-md hover:bg-green-700 transition bg-green-500 "
          >
            {meal}
          </button>
        ))}
      </section>
      <h2 className="text-2xl text-center mb-8 mt-5 font-mono">Post Workout Recovery</h2>    
      <section className="flex flex-wrap justify-center gap-4 p-4">
        {postWorkoutRecovery.map((meal, index) => (
          <button
            key={index}
            className="bg-green-500 text-white px-4 py-2 rounded shadow-md hover:bg-green-700 transition"
          >
            {meal}
          </button>
        ))}
      </section>
      <h2 className="text-2xl text-center mb-8 mt-5 font-mono">Any Time Healthy Snack</h2>    
      <section className="flex flex-wrap justify-center gap-4 p-4">
        {anytimeHealthySnack.map((meal, index) => (
          <button
            key={index}
            className="bg-green-500 text-white px-4 py-2 rounded shadow-md hover:bg-green-700 transition"
          >
            {meal}
          </button>
        ))}
      </section>
      <h2 className="text-2xl text-center mb-8 mt-5 font-mono">Beverages</h2>    
      <section className="flex flex-wrap justify-center gap-4 p-4">
        {beverages.map((meal, index) => (
          <button
            key={index}
            className="bg-green-500 text-white px-4 py-2 rounded shadow-md hover:bg-green-700 transition"
          >
            {meal}
          </button>
        ))}
      </section>
      <h2 className="text-2xl text-center mb-8 mt-5 font-mono">Speciality Item</h2>    
      <section className="flex flex-wrap justify-center gap-4 p-4">
        {specialityItem.map((meal, index) => (
          <button
            key={index}
            className="bg-green-500 text-white px-4 py-2 rounded shadow-md hover:bg-green-700 transition"
          >
            {meal}
          </button>
        ))}
      </section>                         */}
      <h2 className="text-2xl text-center mb-8 mt-5 font-mono">Pre Workout Meals</h2>
       <section>
            <Card />
        </section> 


    </div>
  );
}




