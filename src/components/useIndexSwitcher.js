// import { useState } from "react";
// const useIndexSwitcher = (items) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const currentItem = items[currentIndex]
    
//      const previousIndex = () => {
//         let previous = currentIndex - 1
//         if (previous <= items.length) {
//             previous = 0
//         }
//         setCurrentIndex(previous)
//     }
//     const nextIndex = () => {
//         let next = currentIndex + 1
//         if (next >= items.length) {
//             next = 0
//         }
//         setCurrentIndex(next)
//         console.log(next)
//     }

//     return [
//         currentItem,
//         previousIndex,
//         nextIndex
//     ]
// }
// export default useIndexSwitcher