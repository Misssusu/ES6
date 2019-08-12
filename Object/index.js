let a = 1;
let b = 1;
let name = 'suyuan';
let obj = {
    a,
    b,
    [name]: 18,
    _age: 20,
    get age(){console.log(this._age)},
    set age(value){this._age = value}
};
// console.log(obj);
let readOnly = {
    get name(){return 'suyuan'}
};
Object.defineProperty(readOnly,'name1',{
    value: 'suyuan',
    writable: false
});
console.log(readOnly)