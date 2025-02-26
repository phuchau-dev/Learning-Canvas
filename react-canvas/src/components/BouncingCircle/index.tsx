import { useRef } from "react";
import { useBouncingCircleCanvas } from "./useBouncingCircle";
import type { BouncingCircleProps } from "./types";
import { COLORS } from "../../constants/colors";
import Style from "./style.module.css";

/**
 * Component BouncingCircleCanvas
 * -----------------------------------------
 * - Hiển thị một vòng tròn động trên canvas với hiệu ứng nảy lên xuống.
 * - Sử dụng `useBouncingCircleCanvas` để điều khiển animation.
 * - Cho phép tùy chỉnh màu sắc, kích thước, tốc độ, vị trí...
 */

const BouncingCircleCanvas: React.FC<BouncingCircleProps> = ({
    color,
    initialSize = 50,
    maxSize = 300,
    minSize = 20,
    step = 3,
    positionX,
    positionY,
    backgroundColor = COLORS.BACKGROUND_BLUE,
}) => {
    // useRef để giữ tham chiếu đến thẻ <canvas>
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Kích hoạt animation vòng tròn với các tham số tùy chỉnh
    useBouncingCircleCanvas(
        canvasRef,
        color,
        initialSize,
        maxSize,
        minSize,
        step,
        positionX,
        positionY,
        backgroundColor
    );

    return (
        // Render thẻ <canvas> với border để dễ quan sát
        <canvas
            ref={canvasRef}
            width={600}
            height={600}
            className={Style.myCanvas}
        />
    );
};

export default BouncingCircleCanvas;
