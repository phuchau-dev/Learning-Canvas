import { useEffect, useRef, useCallback } from "react";
import { COLORS } from "../../constants/colors";

/**
 * Custom React hook để tạo hiệu ứng hình tròn nảy liên tục trên canvas.
 *
 * @param {React.RefObject<HTMLCanvasElement | null>} canvasRef - Tham chiếu đến phần tử canvas.
 * @param {string} color - Màu sắc của hình tròn.
 * @param {number} [initialSize=50] - Kích thước ban đầu của hình tròn.
 * @param {number} [maxSize=300] - Kích thước tối đa của hình tròn.
 * @param {number} [minSize=20] - Kích thước tối thiểu của hình tròn.
 * @param {number} [step=3] - Mức thay đổi kích thước mỗi frame.
 * @param {number} [positionX] - Tọa độ X của hình tròn, mặc định là trung tâm canvas.
 * @param {number} [positionY] - Tọa độ Y của hình tròn, mặc định là trung tâm canvas.
 * @param {string} [backgroundColor="white"] - Màu nền của canvas.
 */


export function useBouncingCircleCanvas(
    canvasRef: React.RefObject<HTMLCanvasElement | null>,
    color: string,
    initialSize: number = 50,
    maxSize: number = 300,
    minSize: number = 20,
    step: number = 3,
    positionX?: number,
    positionY?: number,
    backgroundColor: string = COLORS.BACKGROUND_LIGHT
) {
    const sizeRef = useRef(initialSize);
    const growingRef = useRef(true);
    const animationFrameId = useRef<number | null>(null);

    const clearAnimation = () => {
        if (animationFrameId.current !== null) {
            cancelAnimationFrame(animationFrameId.current);
            animationFrameId.current = null;
        }
    };

    const draw = useCallback(() => {
        clearAnimation();

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const range = maxSize - minSize;
        const progress = (sizeRef.current - minSize) / range;
        const easingFactor = Math.sin(progress * Math.PI);
        let dynamicStep = step * (0.5 + 0.5 * easingFactor);

        if (growingRef.current) {
            sizeRef.current += dynamicStep;
            if (sizeRef.current >= maxSize) growingRef.current = false;
        } else {
            sizeRef.current -= dynamicStep;
            if (sizeRef.current <= minSize) growingRef.current = true;
        }

        const x = positionX ?? canvas.width / 2;
        const y = positionY ?? canvas.height / 2;

        ctx.beginPath();
        ctx.arc(x, y, sizeRef.current, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();

        animationFrameId.current = requestAnimationFrame(draw);
    }, [canvasRef, color, backgroundColor, maxSize, minSize, step, positionX, positionY]); // 👈 Thêm đầy đủ dependencies

    useEffect(() => {
        if (!canvasRef.current) return;
        draw();

        return () => clearAnimation();
    }, [canvasRef, draw]); // 👈 Thêm `canvasRef` vào dependencies để tránh cảnh báo

}

