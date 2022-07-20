import { useEffect, useState } from 'react';

const useSidebar = (initialValue = false) => {
  const [isMobile, setIsMobile] = useState(initialValue);
  const [open, setOpen] = useState();

  const handleOpen = () => {
    if (isMobile) setOpen(!open);
  }
  const getWidth = () => window.innerWidth;

  useEffect(() => {
    function handleResize() {
      if (getWidth() > 768) {
        setIsMobile(false);
        setOpen(true);
      } else {
        setIsMobile(true);
        setOpen(false);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [open, handleOpen, isMobile]
}

export default useSidebar;
