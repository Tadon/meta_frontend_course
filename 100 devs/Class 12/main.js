let admin
let adminName = "John"
admin = adminName

let planet = "Earth"

let user = "Mark"


// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

function checkAge(age){
    return (age > 18) ? true : confirm('Did parents allow you?')
}

function min(a, b){
    return a < b ? a : b;
}

function pow(x, n){
    let result = x
    for (i = 1; i < n; i ++){
        result *= x
    }
    return result;
}