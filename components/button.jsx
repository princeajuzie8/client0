import $ from "jquery";
// import "../src/index.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Button = () => {
  useEffect(() => {
    const handleMouseEnter = function (e) {
      const parentOffset = $(this).offset();
      const relX = e.pageX - parentOffset.left;
      const relY = e.pageY - parentOffset.top;
      $(this).find('span').css({ top: relY, left: relX });
    };

    const handleMouseOut = function (e) {
      const parentOffset = $(this).offset();
      const relX = e.pageX - parentOffset.left;
      const relY = e.pageY - parentOffset.top;
      $(this).find('span').css({ top: relY, left: relX });
    };

    $('.button-1').on('mouseenter', handleMouseEnter).on('mouseout', handleMouseOut);
    $('.button-2').on('mouseenter', handleMouseEnter).on('mouseout', handleMouseOut);

    return () => {
      $('.button-1').off('mouseenter', handleMouseEnter).off('mouseout', handleMouseOut);
      $('.button-2').off('mouseenter', handleMouseEnter).off('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div>
      <div className="hero-caption-btn mt-[15px] flex" >
        <Link to="#" className="button-1 whitespace-nowrap" 
      >
          Hire Me <span></span>
        </Link>
        <Link to="#" className="button-2 whitespace-nowrap text-center" 
     >
          Dwonload Cv <span></span>
         
        </Link>
      </div>
    </div>
  );
};

export default Button;
