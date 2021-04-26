import React, { LazyExoticComponent, Suspense } from "react";

// export const withSuspense = (Component: LazyExoticComponent) => {
//     return (props) => {
//       return  <Suspense fallback={<div>Loading...</div>}>
//             <Component {...props}/>
//         </Suspense>
//     }
// };

/**
 * Задержка при получении данных — это новая возможность, которая позволяет использовать
 *  <Suspense> и декларативно «ждать» чего-либо ещё, включая данные. 
 * ещё нет в стабильной версии*/ 