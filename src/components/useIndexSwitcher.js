// import { useState } from "react";
// const useIndexSwitcher = (items) => {
//     const [currentDisplay, setCurrentDisplay] = useState([]);

//     const currentItem = items[currentDisplay]
    
//      const previousIndex = () => {
//         let previous = currentDisplay - 1
//         if (previous <= items.length) {
//             previous = 0
//         }
//         setCurrentDisplay(previous)
//     }
//     const nextIndex = () => {
//         let next = (currentDisplay + 1)
//         if (next >= items.length) {
//             next = 0
//         }
//         setCurrentDisplay(next)
//         console.log(next)
//     }

//     return [
//         currentItem,
//         previousIndex,
//         nextIndex
//     ]
// }
// export default useIndexSwitcher