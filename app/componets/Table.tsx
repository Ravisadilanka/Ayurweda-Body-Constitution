// import React from 'react';

// interface TableProps {
//   selections: { [key: string]: string };
//   conditionCounts: {
//     Vatha: number;
//     Pitha: number;
//     Kapha: number;
//   };
//   result: string;
// }

// const Table: React.FC<TableProps> = ({ selections, conditionCounts, result }) => {
//   return (
//     <div className="mt-8">
//       <h2 className="font-semibold text-lg mb-4">User Data</h2>
//       <table className="w-full bg-gray-800 rounded-lg shadow-md">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 text-left">Body Size</th>
//             <th className="py-2 px-4 text-left">Body Weight</th>
//             <th className="py-2 px-4 text-left">Height</th>
//             <th className="py-2 px-4 text-left">Vatha</th>
//             <th className="py-2 px-4 text-left">Pitha</th>
//             <th className="py-2 px-4 text-left">Kapha</th>
//             <th className="py-2 px-4 text-left">Your Prakurthi</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="py-2 px-4">{selections['Body Size']}</td>
//             <td className="py-2 px-4">{selections['Body Weight']}</td>
//             <td className="py-2 px-4">{selections.Height}</td>
//             <td className="py-2 px-4">{conditionCounts.Vatha}</td>
//             <td className="py-2 px-4">{conditionCounts.Pitha}</td>
//             <td className="py-2 px-4">{conditionCounts.Kapha}</td>
//             <td className="py-2 px-4">{result}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;