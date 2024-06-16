// 'use client'

// // Home.tsx
// import { usePersistedState } from 'use-persisted-state';

// import React, { useState } from 'react';
// import Table from './Table'; // Assuming Table component is in the same directory


// interface Selections {
//   [key: string]: string;
// }

// interface ConditionCounts {
//   Vatha: number;
//   Pitha: number;
//   Kapha: number;
// }

// const initialConditionCounts: ConditionCounts = {
//   Vatha: 0,
//   Pitha: 0,
//   Kapha: 0,
// };

// const conditionLogic: Record<string, Record<string, Record<string, number>>> = {
//   "Body Size": {
//     Slim: { Vatha: 1 },
//     Medium: { Pitha: 1 },
//     Large: { Kapha: 1 },
//   },
//   "Body Weight": {
//     Low: { Vatha: 1 },
//     Medium: { Pitha: 1 },
//     Overweight: { Kapha: 1 },
//   },
//   Height: {
//     "Tall Or Short": { Vatha: 1 },
//     Average: { Pitha: 1 },
//     "Thin And Sturdy Or Short And Stocky": { Kapha: 1 },
//   },
// };

// const options: Record<string, string[]> = {
//   "Body Size": ["Slim", "Medium", "Large"],
//   "Body Weight": ["Low", "Medium", "Overweight"],
//   Height: ["Tall Or Short", "Average", "Thin And Sturdy Or Short And Stocky"],
// };

// const Home: React.FC = () => {
// //   const [selections, setSelections] = useState<Selections>({});
// //   const [conditionCounts, setConditionCounts] = useState<ConditionCounts>(
// //     initialConditionCounts
// //   );
// //   const [result, setResult] = useState("");

//   const [showModal, setShowModal] = useState(false);
//   const [selections, setSelections] = usePersistedState('selections', {});
// const [conditionCounts, setConditionCounts] = usePersistedState('conditionCounts', initialConditionCounts);
// const [result, setResult] = usePersistedState('result', '');


//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setShowModal(true);

//     let newCounts = { ...initialConditionCounts };
//     Object.keys(selections).forEach((key) => {
//       const value = selections[key];
//       const condition = conditionLogic[key][value];
//       if (condition) {
//         Object.keys(condition).forEach((type) => {
//           if (Object.keys(newCounts).includes(type)) {
//             newCounts[type as keyof ConditionCounts] += condition[type];
//           }
//         });
//       }
//     });

//     setConditionCounts(newCounts);

//     const v = newCounts.Vatha;
//     const p = newCounts.Pitha;
//     const k = newCounts.Kapha;

//     if (v > 14 && p < 13 && p > k) {
//       setResult("Vatha Pitha");
//     } else if (v > 14 && k < 13 && k > p) {
//       setResult("Vatha Kapha");
//     } else if (p > 14 && v < 13 && v > k) {
//       setResult("Pitha Vatha");
//     } else if (p > 14 && k < 13 && k > v) {
//       setResult("Pitha Kapha");
//     } else if (k > 14 && p < 13 && p > v) {
//       setResult("Kapha Pitha");
//     } else if (k > 14 && v < 13 && v > p) {
//       setResult("Kapha Vatha");
//     } else if (k <= 12 && v === p) {
//       setResult("Vatha Pitha");
//     } else if (p <= 12 && v === k) {
//       setResult("Vatha Kapha");
//     } else if (v <= 12 && p === k) {
//       setResult("Pitha Kapha");
//     } else if (
//       (k === 14 && p === 13 && v === 13) ||
//       (p === 14 && k === 13 && v === 13) ||
//       (v === 14 && p === 13 && k === 13)
//     ) {
//       setResult("Thridosha");
//     } else {
//       setResult("Please select all the fields.");
//     }
//   };

//   const closeModal = () => {
//     setShowModal(false);
 
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setSelections({ ...selections, [name]: value });
//   };

//   return (
//     <div className="container p-5 bg-gray-900 text-white min-h-screen rounded-lg shadow-lg">
//       <div>
//         <h1 className="font-bold text-2xl text-center">
//           Ayurveda Body Constitution
//         </h1>
//       </div>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//           {Object.keys(options).map((key) => (
//             <div key={key} className="bg-gray-800 p-4 rounded-lg shadow-md">
//               <p className="font-semibold text-lg mb-2">
//                 {key
//                   .replace(/([A-Z])/g, " $1")
//                   .replace(/^./, (str) => str.toUpperCase())}
//                 :
//               </p>
//               {options[key].map((option, index) => (
//                 <div
//                   key={option}
//                   className={`mt-2 ${index % 3 === 0 ? "block" : ""}`}
//                 >
//                   <label className="inline-flex items-center">
//                     <input
//                       type="radio"
//                       name={key}
//                       value={option}
//                       checked={selections[key] === option}
//                       onChange={handleChange}
//                       className="form-radio text-blue-500"
//                     />
//                     <span className="ml-2">{option}</span>
//                   </label>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
//         >
//           Submit
//         </button>
//       </form>

//       {showModal && (
//         <div className="fixed z-10 inset-0 overflow-y-auto">
//           <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             <div
//               className="fixed inset-0 transition-opacity"
//               aria-hidden="true"
//             >
//               <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
//             </div>
//             <span
//               className="hidden sm:inline-block sm:align-middle sm:h-screen"
//               aria-hidden="true"
//             >
//               &#8203;
//             </span>
//             <div className="inline-block align-bottom bg-gray-700 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
//               <div>
//                 <h3 className="text-lg leading-6 font-medium text-white">
//                   Form Submission
//                 </h3>
//                 <div className="mt-4">
//                   <p className="text-gray-300">Condition Counts:</p>
//                   <p className="text-white">Vatha: {conditionCounts.Vatha}</p>
//                   <p className="text-white">Pitha: {conditionCounts.Pitha}</p>
//                   <p className="text-white">Kapha: {conditionCounts.Kapha}</p>
//                   <p className="text-white mt-2">Your Prakurthi: {result}</p>
//                 </div>
//               </div>
//               <div className="mt-5 sm:mt-6 ">
//                 <button
//                   onClick={closeModal}
//                   className="inline-flex  justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm transition duration-300"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

// <Table
//         selections={selections}
//         conditionCounts={conditionCounts}
//         result={result}
//       />

//     </div>
//   );
// };

// export default Home;
