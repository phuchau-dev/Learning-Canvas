const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const colors = ['red', 'green', 'blue'];
let colorIndex = 0;
let width = 50;
const maxWidth = canvas.width - 50;
const minWidth = 50;
let growing = true;
const height = 70;
const skew = 70;
const angle = 20 * (Math.PI / 180); // Xoay ngược lại khoảng 1 giờ (+20 độ)

// Hàm vẽ hình bình hành với điểm cố định bên trái
function drawParallelogram(width, color) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save(); // Lưu trạng thái ban đầu

  // Cố định điểm đầu bên trái
  ctx.translate(0, 50);
  ctx.rotate(angle); // Xoay hình

  // Gradient theo đường chéo phủ hết hình bình hành
  const gradient = ctx.createLinearGradient(0, 0, width + skew, height);
  gradient.addColorStop(0, color);    // Bên trái màu chính
  gradient.addColorStop(0.2, color);  // Giữ màu chính nửa đầu
  gradient.addColorStop(1, 'white');  // Nửa sau chuyển trắng
  ctx.fillStyle = gradient;

  // Vẽ hình bình hành
  ctx.beginPath();
  ctx.moveTo(0, 0);                  // Góc trên bên trái (Cố định)
  ctx.lineTo(width, 0);              // Góc trên bên phải
  ctx.lineTo(width + skew, height);  // Góc dưới bên phải (Di chuyển)
  ctx.lineTo(skew, height);          // Góc dưới bên trái (Di chuyển)
  ctx.closePath();
  ctx.fill();

  ctx.restore(); // Khôi phục trạng thái ban đầu
}

// Hàm cập nhật kích thước và màu sắc
function update() {
  if (growing) {
    width += 0.8;
    if (width >= maxWidth) {
      growing = false;
    }
  } else {
    width -= 5;
    if (width <= minWidth) {
      growing = true;
      colorIndex = (colorIndex + 1) % colors.length;
    }
  }
}

// Vòng lặp hoạt ảnh
function animate() {
  drawParallelogram(width, colors[colorIndex]);
  update();
  requestAnimationFrame(animate);
}

// Bắt đầu animation
animate();
