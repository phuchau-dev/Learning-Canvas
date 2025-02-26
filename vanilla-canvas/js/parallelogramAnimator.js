import { getRandomColors } from './colors.js';

export class ParallelogramAnimator {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            console.error(
                `Canvas với ID "${canvasId}" không tồn tại.`,
            );
            return;
        }
        this.ctx = this.canvas.getContext('2d');

        this.colors = getRandomColors(5);
        this.colorIndex = 0;
        this.width = 50;
        this.maxWidth = this.canvas.width - 50;
        this.minWidth = 50;
        this.growing = true;
        this.height = 70;
        this.skew = 70;
        this.angle = 20 * (Math.PI / 180);
    }

    drawParallelogram() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height,);
        this.ctx.save();
        this.ctx.translate(0, 50);
        this.ctx.rotate(this.angle);

        const gradient = this.ctx.createLinearGradient(0, 0, this.width + this.skew, this.height,);
        gradient.addColorStop(0, this.colors[this.colorIndex]);
        gradient.addColorStop(0.2, this.colors[this.colorIndex],);
        gradient.addColorStop(1, 'white');

        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(this.width, 0);
        this.ctx.lineTo(this.width + this.skew, this.height);
        this.ctx.lineTo(this.skew, this.height);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.restore();
    }

    update() {
        if (this.growing) {
            this.width += 0.8;
            if (this.width >= this.maxWidth) {
                this.growing = false;
            }
        } else {
            this.width -= 5;
            if (this.width <= this.minWidth) {
                this.growing = true;
                this.colorIndex =
                    (this.colorIndex + 1) % this.colors.length;
            }
        }
    }

    animate() {
        this.drawParallelogram();
        this.update();
        requestAnimationFrame(() => this.animate());
    }

    start() {
        this.animate();
    }
}
