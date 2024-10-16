let test: any = ''

test = 12
console.log(typeof test);

test = false
console.log(typeof test);

test = {}
console.log(typeof test);

(function (newValue: any, age: number): (number | any)  {
    return age
})('', 1);