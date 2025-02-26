export const getRandomColors = (num = 10) => {
    const allColors = [
        'red', 'green', 'blue', 'purple', 'orange', 'yellow',
        'pink', 'cyan', 'magenta', 'lime', 'teal', 'indigo',
        'violet', 'gold', 'silver', 'brown', 'black', 'white',
        'gray', 'navy', 'olive', 'maroon', 'aqua', 'coral',
        'salmon', 'turquoise', 'chocolate', 'crimson', 'khaki',
        'orchid', 'plum', 'lavender', 'peachpuff', 'sienna',
        'tan', 'tomato', 'wheat', 'thistle', 'seagreen',
    ];

    return Array.from({ length: num }, () =>
        allColors[Math.floor(Math.random() * allColors.length)]
    );
};
