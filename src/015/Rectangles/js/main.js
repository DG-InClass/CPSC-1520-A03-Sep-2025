
const shapes = [];

document.querySelector('button').addEventListener('click', (evt) => {
    evt.preventDefault();
    const w = 10;
    const h = 5;
    
    // Create the Rectangle object.
    const box = new Rectangle(h, w);
    
    shapes.push(box);
    console.log('box created:', box);
    box.report(); // call my method/function of my Rectangle instance
    console.log(`There are ${Rectangle.count} boxes so far.`);
});
