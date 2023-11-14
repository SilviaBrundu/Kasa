import React, { useState } from 'react';

function Collapse ({title, text}) {
    const [ visible , setVisible ] = useState (false) 
    
    return (
        <div className='about_container'>
            <div className='about_content'>
                <h1 className='about_title'>{title}</h1>
                <button className={`about_button_container ${visible? 'about_button_container_rotateDown' : ''}`} 
                onClick={() => {setVisible(!visible)}}>
                    <i className={`fa-solid ${visible? 'fa-chevron-down fa-2xl' : 'fa-chevron-up fa-2xl'}`}></i>
                </button>
            </div>
            {visible&&(
                <div className='about_text_content'>
                    <p className='about_text'>{text}</p>
                </div>
            )}
        </div>
    )   
}

// function Collapse ({title, text}) {
//     const [ visible , setVisible ] = useState (false)

//     return (
//         <div className='about_container'>
//             <div className='about_content'>
//                 <h1 className='about_title'>{title}</h1>
//                 <button className={`about_button_container ${visible? 'about_button_container_rotateUp' : 'about_button_container_rotateDown'}`} onClick={() => {setVisible(!visible)}}>
//                         <i className={`fa-solid ${visible? 'fa-chevron-down fa-2xl' : 'fa-chevron-up fa-2xl'}`}></i>
//                 </button>
//             </div>
//             {visible&&(
//                 <div className='about_text_content'>
//                     <p className='about_text'>{text}</p>
//                 </div>
//             )}
//         </div>
//     ) }

//     return (
//         <div className='about_container'>
//             {/* <button className='about_button_container' onClick={() => setVisible(!visible)}> */}
//                 <div className='about_content'>
//                     <h1 className='about_title'>{title}</h1>
//                     <button className='about_button_container' onClick={() => setVisible(!visible)}>
//                         <i className={`fa-solid ${visible? 'fa-chevron-down fa-2xl' : 'fa-chevron-up fa-2xl'}`}></i>
//                     </button>
//                 </div>
//             {/* </button> */}
//             {visible&&(
//                 <div className='about_text_content'>
//                     <p className='about_text'>{text}</p>
//                 </div>
//             )}
//         </div>
//     )   
// }

// const [ visible , setVisible ] = useState (false);


//   const toggle = () => {
//     setVisible(!visible);
//   };


//   return (
//     <div className='about_container'>
//       <div className='about_content'>
//         <h1 className='about_title'>{title}</h1>
//         <button className='about_button_container' onClick={toggle}>
//             <i  className={`fa-solid fa-chevron-up ${visible ? "rotate" : ""}`}></i>
//         </button>
//         </div>
//       <div className={`about_text_content ${visible ? "dropDow" : ""}`}>
//       <p className='about_text'>{text}</p>
//       </div>
//     </div>
//   );
// }
export default Collapse;