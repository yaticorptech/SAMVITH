// // src/pages/WomenEmpowerment.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { Users, Briefcase, Heart } from "lucide-react";
// import image1 from "../assets/images/we1.png";
// import image2 from "../assets/images/we2.png";
// import image3 from "../assets/images/we3.png";

// const programs = [
//   {
//     title: "Skill Training",
//     description:
//       "Providing vocational and digital training to empower women with employable skills.",
//     icon: <Users className="w-10 h-10 text-pink-500" />,
//   },
//   {
//     title: "Entrepreneurship Support",
//     description:
//       "Helping women start and scale small businesses with mentorship and resources.",
//     icon: <Briefcase className="w-10 h-10 text-indigo-500" />,
//   },
//   {
//     title: "Self-Help Groups",
//     description:
//       "Building networks of support and financial independence through SHGs.",
//     icon: <Heart className="w-10 h-10 text-red-500" />,
//   },
// ];

// const images = [image1, image2, image3];

// const impactHighlights = [
//   { title: "500+ Women Trained", icon: <Users className="w-10 h-10 text-pink-500" /> },
//   { title: "120+ Startups Supported", icon: <Briefcase className="w-10 h-10 text-indigo-500" /> },
//   { title: "50+ Self-Help Groups", icon: <Heart className="w-10 h-10 text-red-500" /> },
// ];

// const WomenEmpowerment = () => {
//   return (
//     <div className="bg-gradient-to-b from-white via-pink-50 to-purple-50 min-h-screen py-16 px-6 sm:px-10 lg:px-20">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-12"
//       >
//         <h1 className="text-4xl font-extrabold text-pink-600 mb-4">
//           Women Empowerment
//         </h1>
//         <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//           We strive to create opportunities for women through skill development,
//           entrepreneurship, and community-led initiatives.
//         </p>
//       </motion.div>

//       {/* Cards */}
//       <div className="grid md:grid-cols-3 gap-8 mb-16">
//         {programs.map((program, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.6 }}
//             className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300"
//           >
//             <div className="flex justify-center mb-6">{program.icon}</div>
//             <h2 className="text-2xl font-semibold text-indigo-600 mb-3 text-center">
//               {program.title}
//             </h2>
//             <p className="text-gray-600 text-center">{program.description}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Continuous Auto-sliding Images with Gradient Hover */}
//       <div className="overflow-hidden relative mb-16">
//         <motion.div
//           className="flex gap-6 sm:gap-8 lg:gap-10"
//           style={{ whiteSpace: "nowrap" }}
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{
//             x: {
//               repeat: Infinity,
//               repeatType: "loop",
//               duration: 20,
//               ease: "linear",
//             },
//           }}
//         >
//           {[...images, ...images].map((img, idx) => (
//             <motion.div
//               key={idx}
//               className="flex-shrink-0 w-full sm:w-80 lg:w-96 rounded-2xl overflow-hidden shadow-lg relative group"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               <img
//                 src={img}
//                 alt={`Women Empowerment ${idx + 1}`}
//                 className="w-full h-48 sm:h-56 lg:h-64 object-cover transition duration-500 group-hover:brightness-110"
//               />
//               {/* Gradient overlay on hover */}
//               <div className="absolute inset-0 bg-gradient-to-t from-pink-500/40 via-purple-400/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Impact Highlights */}
//       <div className="max-w-8xl mx-auto mb-16">
//         <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
//           Impact Highlights
//         </h2>
//         <div className="grid sm:grid-cols-3 gap-8">
//           {impactHighlights.map((impact, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.2, duration: 0.6 }}
//               className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition duration-300"
//             >
//               <div className="mb-4">{impact.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-800">{impact.title}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WomenEmpowerment;
