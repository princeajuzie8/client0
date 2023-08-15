
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import User from "@/Resources/images/user.svg";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import { styled } from "styled-components";
// import Slider from "react-slick";
// import Image from "next/image";
// import { FaStar } from "react-icons/fa";
// import { BsStarHalf } from "react-icons/bs";
// import Review1 from "@/Resources/images/review12.jpg";
// import Review2 from "@/Resources/images/review02.jpg";
// import Review3 from "@/Resources/images/review033.jpg";
// import Review4 from "@/Resources/images/review04.jpg";
// import Review5 from "@/Resources/images/review5.jpg";
// import Review6 from "@/Resources/images/review11.jpg";
// import Review7 from "@/Resources/images/review01.jpg";
// import Review8 from "@/Resources/images/review05.jpg";
// import Review9 from "@/Resources/images/review8.jpg";


// const Wrapper = styled.div`
//   margin: auto;
//   width: min(100%, 940px);
//   @media (min-width: 992px) and (max-width: 1199px) {
//     width: min(90%, 850px);
// }
// @media (max-width: 991px) {
//   width: min(80%, 800px);
// }
// `;
// const Container = styled(Slider)`

// display: flex;
//   justify-content: center;
//   margin: 0;
//   padding: 0;

 
//   &::-webkit-scrollbar {
//     display: none;
//   }
//   .slick-list {
//     overflow: hidden;
//     margin-top: 1rem;
//     margin-bottom: 60px;
//   }
 
//   ul li button {
//     display:none;
  
//   }


//   .slick-prev {
// 	position: absolute;
//   z-index: 1;
// 	top: 10%;
// 	left: -32px;
// }
// .slick-next {
// 	position: absolute;
// 	top: 10%;
// 	right: -32px;
// }


// .slick-arrow {
// 	border: 2px solid #ff66c4;
// 	width: 40px !important;
// 	height: 40px !important;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	border-radius: 50%;
// 	color: #ff66c4;
// 	-webkit-transition: all .3s ease-in-out;
// 	transition: all .3s ease-in-out;
// }
// .slick-arrow:hover{
// 	background: #ff66c4;
// 	color: #fff;
// }
//   .slick-arrow::before {
//     display: block;
//   }
//   .slick-slide {
//     width: 50%; /* Show only two slides at a time */
//     padding: 25px; /* Optional: Add some spacing between slides */
//   }

// `;
// const Slick = () => {
//   const settings = {
//     dots: false,
//     autoplay: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 2,
    
//     responsive: [
//       {
//         breakpoint: 766,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 880,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
    

//     ],

//   };

//   return (
//     <Wrapper>

      
//     <div className="">
//       <Container {...settings}>
//         <div>
//         <div class="client-review-single ">
//             <div class="client-review-single-full">
//               <div class="client-review-single-content">
//                 <h3>Johnny Depp</h3>
//                 <h5>themeforest</h5>
//                 <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px]w-[400px] m-[auto] Laptopmin:w-[350px] items-center tabletmin:w-[300px] tabletSlick:max-w-[1000px] tabletSlick:w-[auto]">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Quisque dictum elementum nibh, non tristique ante porta vitae.{" "}
//                 </p>
//                 <div class="review">
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <BsStarHalf />
//                   </span>
//                   <span>
//                     <BsStarHalf />
//                   </span>
//                 </div>
//               </div>
//               <div class="client-review-single-img">
//                 <Image src={Review8} alt="avatar" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//         <div class="client-review-single ">
//             <div class="client-review-single-full">
//               <div class="client-review-single-content">
//                 <h3>Liberty Smith</h3>
//                 <h5>themeforest</h5>
//                 <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px]w-[400px] m-[auto] Laptopmin:w-[350px] items-center tabletmin:w-[300px] tabletSlick:max-w-[950px] tabletSlick:w-[auto]">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Quisque dictum elementum nibh, non tristique ante porta vitae.{" "}
//                 </p>
//                 <div class="review">
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                 </div>
//               </div>
//               <div class="client-review-single-img">
//                 <Image src={Review9} alt="avatar" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//         <div class="client-review-single ">
//             <div class="client-review-single-full">
//               <div class="client-review-single-content">
//                 <h3>Grace mitchell</h3>
//                 <h5>themeforest</h5>
//                 <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px]w-[400px] m-[auto] Laptopmin:w-[350px] items-center tabletmin:w-[300px]  tabletSlick:max-w-[950px] tabletSlick:w-[auto]">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Quisque dictum elementum nibh, non tristique ante porta vitae.{" "}
//                 </p>
//                 <div class="review">
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <BsStarHalf />
//                   </span>
//                 </div>
//               </div>
//               <div class="client-review-single-img">
//                 <Image src={Review7} alt="avatar" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//         <div class="client-review-single ">
//             <div class="client-review-single-full">
//               <div class="client-review-single-content">
//                 <h3>Sophia Williams</h3>
//                 <h5>themeforest</h5>
//                 <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px]w-[400px] m-[auto] Laptopmin:w-[350px] items-center tabletmin:w-[300px] tabletSlick:max-w-[950px] tabletSlick:w-[auto]">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Quisque dictum elementum nibh, non tristique ante porta vitae.{" "}
//                 </p>
//                 <div class="review">
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <BsStarHalf />
//                   </span>
//                   <span>
//                     <BsStarHalf />
//                   </span>
//                   <span>
//                     <BsStarHalf />
//                   </span>
//                 </div>
//               </div>
//               <div class="client-review-single-img">
//                 <Image src={Review5} alt="avatar" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//         <div class="client-review-single ">
//             <div class="client-review-single-full">
//               <div class="client-review-single-content">
//                 <h3>Emily Johnson</h3>
//                 <h5>themeforest</h5>
//                 <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px]w-[400px] m-[auto] Laptopmin:w-[350px] items-center tabletmin:w-[300px] tabletSlick:max-w-[950px] tabletSlick:w-[auto]">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Quisque dictum elementum nibh, non tristique ante porta vitae.{" "}
//                 </p>
//                 <div class="review">
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                 </div>
//               </div>
//               <div class="client-review-single-img">
//                 <Image src={Review4} alt="avatar" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//         <div class="client-review-single ">
//             <div class="client-review-single-full">
//               <div class="client-review-single-content">
//                 <h3>Joshua Martinez</h3>
//                 <h5>themeforest</h5>
//                 <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px]w-[400px] m-[auto] Laptopmin:w-[350px] items-center tabletmin:w-[300px] tabletSlick:max-w-[950px] tabletSlick:w-[auto]">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Quisque dictum elementum nibh, non tristique ante porta vitae.{" "}
//                 </p>
//                 <div class="review">
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <BsStarHalf />
//                   </span>
//                   <span>
//                     <BsStarHalf />
//                   </span>
//                 </div>
//               </div>
//               <div class="client-review-single-img">
//                 <Image src={Review3} alt="avatar" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//         <div class="client-review-single ">
//             <div class="client-review-single-full">
//               <div class="client-review-single-content">
//                 <h3>Favour Philip</h3>
//                 <h5>themeforest</h5>
//                 <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px]w-[400px] m-[auto] Laptopmin:w-[350px] items-center tabletmin:w-[300px] tabletSlick:max-w-[950px] tabletSlick:w-[auto]">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Quisque dictum elementum nibh, non tristique ante porta vitae.{" "}
//                 </p>
//                 <div class="review">
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                 </div>
//               </div>
//               <div class="client-review-single-img">
//                 <Image src={Review6} alt="avatar" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//         <div class="client-review-single ">
//             <div class="client-review-single-full">
//               <div class="client-review-single-content">
//                 <h3>John Smilga</h3>
//                 <h5>themeforest</h5>
//                 <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px]w-[400px] m-[auto] Laptopmin:w-[350px] items-center tabletmin:w-[300px] tabletSlick:max-w-[950px] tabletSlick:w-[auto]">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Quisque dictum elementum nibh, non tristique ante porta vitae.{" "}
//                 </p>
//                 <div class="review">
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <BsStarHalf />
//                   </span>
//                 </div>
//               </div>
//               <div class="client-review-single-img">
//                 <Image src={Review1} alt="avatar" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//         <div class="client-review-single ">
//             <div class="client-review-single-full">
//               <div class="client-review-single-content">
//                 <h3>Johnny Depp</h3>
//                 <h5>themeforest</h5>
//                 <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px]w-[400px] m-[auto] Laptopmin:w-[350px] items-center tabletmin:w-[300px] tabletSlick:max-w-[950px] tabletSlick:w-[auto] ">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Quisque dictum elementum nibh, non tristique ante porta vitae.{" "}
//                 </p>
//                 <div class="review">
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <BsStarHalf />
//                   </span>
//                   <span>
//                     <BsStarHalf />
//                   </span>
//                 </div>
//               </div>
//               <div class="client-review-single-img">
//                 <Image src={Review5} alt="avatar" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//     </Wrapper>
//   );
// };

// export default Slick;
