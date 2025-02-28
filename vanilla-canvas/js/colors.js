export const getRandomColors = (num = 100) => {
    let baseColor = 0xFF0000;
    return Array.from({ length: num }, (_, i) => {
        if (i === 0) return `#FF0000`;

        let variation = (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 0x0F0F0F);
        let newColor = (baseColor + variation) & 0xFFFFFF;
        return `#${newColor.toString(16).padStart(6, '0')}`;
    });
};
