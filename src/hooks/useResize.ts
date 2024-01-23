import { useState, useEffect } from "react";

interface ResizeItem {
  width: number;
  decreasePercent: number;
}

interface UseResizeFontProps {
  initialWidth?: number;
}

const useResizeFont = ({ initialWidth = 0 }: UseResizeFontProps = {}) => {
  const [windowWidth, setWindowWidth] = useState<number>(initialWidth);

  const resizeList = (normalSize: number, list: ResizeItem[]): number => {
    for (const { width, decreasePercent } of list) {
      if (windowWidth <= width) {
        return normalSize - (normalSize * decreasePercent) / 100;
      }
    }
    return normalSize;
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { windowWidth, resizeList };
};

export default useResizeFont;
