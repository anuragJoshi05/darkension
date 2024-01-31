import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, fadeIn2 } from '../Motion/variants'
const Prime = () => {
  return (
    <section className='bg-gray-900 lg:w-[90%] w-full flex md:flex-row flex-col justify-center mx-auto py-[1rem] mt-[5%] overflow-hidden'>
        <div className='w-full flex flex-col md:flex-row justify-center py-[5%]'>
            <motion.div variants={fadeIn2(2.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='flex flex-col w-[2/3] mx-auto mt-[10%] text-center'>
                <span className='text-gray-200 font-bold text-[60px] lg:text-[100px] txt text-center'> DARKENSION</span>
                <span className='text-[25px] lg:text-[50px] font-cursive text-gray-500 mt-[1rem]'>
                    Brings you closer to the ui
                </span>
            </motion.div>
            <motion.div variants={fadeIn(7.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='flex'>
                <img src='https://github.com/StephenStolk/darkension/blob/7e5b77cc4a7aa8c3b8a51ddcda98f8f6fd3047dd/frontend/public/f2.png' className='w-[50%] lg:w-[100%] lg:h-[35rem] h-[10rem]'></img>
            </motion.div>
        </div>
    </section>
  )
}

export default Prime


// // Prime.js
// import React from 'react'
// import { motion } from 'framer-motion'
// import { fadeIn } from '../Motion/variants' // Adjust the path to your variants.js file

// const Prime = () => {
//   return (
//     <section className='bg-gray-900 w-full flex md:flex-row flex-col justify-center mx-auto py-[1rem] mt-[5%]'>
//       <div className='w-full flex flex-col md:flex-row justify-center py-[5%]'>
//         <div className='flex flex-col w-full md:w-[2/3] mx-auto mt-[10%] text-center'>
//           <span className='text-gray-200 font-bold text-[60px] lg:text-[100px] txt text-center'> DARKENSION</span>
//           <span className='text-[25px] lg:text-[50px] font-cursive text-gray-500 mt-[1rem]'>
//             Brings you closer to the ui
//           </span>
//         </div>
//         <motion.div
//           variants={fadeIn} // Use the imported fadeIn object directly
//           initial="hidden"
//           animate="show"
//           viewport={{ once: true, amount: 0.5 }}
//           className='flex'
//         >
//           <img src='f2.png' className='w-[50%] lg:w-[100%] lg:h-[35rem] h-[10rem]'></img>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Prime