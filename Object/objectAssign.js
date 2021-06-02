//Using JavaScript Object.assign() to clone an object
const widget = {
    color: 'red'
};

const cloneWidget = Object.assign({}, widget);
console.log(cloneWidget); //Output: { color: 'red' }

//Using JavaScript Object.assign() to merge object
const box = {
    height: 10,
    width: 20
};
const style = {
    color: 'Red',
    borderStyle: 'solid'
};
const styleBox = Object.assign({}, box, style);
console.log(styleBox);
//Output: { height: 10, width: 20, color: 'Red', borderStyle: 'solid' }

//Note: ถ้า object มี property ที่เหมือนกัน จะเรียกข้อมูลอันล่าสุด
const box2 = {
    height: 10,
    width: 20,
    color: 'Red'
};
const style2 = {
    color: 'Blue',
    borderStyle: 'solid'
};
const styleBox2 = Object.assign({}, box2, style2);
console.log(styleBox2);
// Output: { height: 10, width: 20, color: 'Blue', borderStyle: 'solid' }