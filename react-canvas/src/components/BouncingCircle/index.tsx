import { useState, useEffect, useRef } from "react";
import styles from "./style.module.css"; 
import { COLORS } from "../../constants/colors"; 

const BouncingCircle = () => {
  const [size, setSize] = useState(20);
  const growingRef = useRef(true); // Dùng useRef để lưu trạng thái

  useEffect(() => {
    const interval = setInterval(() => {
      setSize((prevSize) => {
        if (growingRef.current) {
          if (prevSize >= 400) {
            growingRef.current = false;
            return prevSize - 5;
          }
          return prevSize + 5;
        } else {
          if (prevSize <= 20) {
            growingRef.current = true;
            return prevSize + 5;
          }
          return prevSize - 5;
        }
      });
    }, 50);

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, []);                                 // Chạy một lần duy nhất khi component mount

  return (
    <div
      className={styles.circle}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: COLORS.YELLOW, 
      }}
    />
  );
};

export default BouncingCircle;
