// import { useRef } from "react";
// // import gsap from "gsap";
// import { useGSAP } from "@gsap/react";


// export default function Main() {
//     const main = useRef();
    
//     gsap.registerPlugin(useGSAP);

//     useGSAP(() => {
//         gsap.to("#fs",{height: "0%", duration: 3})
//         gsap.to("#elem",{height: "100%", duration: 2, delay: -1})
//         gsap.to("#white",{height: "100%", top: 1, duration: 2, delay: -0.5})
//     })

//   return (
//     <div className="relative w-[100%] h-[740px] bg-[#333533]" ref={main}>
//         <div className="w-[100%] h-[100px] bg-[#333533]" id="fs"></div>
//         <div className="w-[100%] absolute bottom-0 h-[30px] bg-[#ffd100]" id="elem"></div>
//         <div className="w-[100%] h-0 absolute bottom-0 bg-slate-200" id="white"></div>
//     </div>   
//   )
// } 