export interface BouncingCircleProps {
    color: string;             // Màu sắc của hình tròn
    initialSize?: number;      // Kích thước ban đầu của hình tròn (mặc định: 50)
    maxSize?: number;          // Kích thước lớn nhất của hình tròn (mặc định: 300)
    minSize?: number;          // Kích thước nhỏ nhất của hình tròn (mặc định: 20)
    step?: number;             // Bước thay đổi kích thước mỗi frame (mặc định: 3)
    positionX?: number;        // Vị trí X của hình tròn trên canvas
    positionY?: number;        // Vị trí Y của hình tròn trên canvas
    backgroundColor?: string;  // Màu nền của canvas (mặc định: trắng)
    mode?: "reset" | "bounce";  // Chế độ hoạt động của hình tròn
}
