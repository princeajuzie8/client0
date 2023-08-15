
import { useState, useEffect } from 'react';

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 400) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-area ${showButton ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      Scroll to Top
    </button>
  );
};

export default ScrollButton;
