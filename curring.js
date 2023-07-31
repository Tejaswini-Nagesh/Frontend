//Curring in javascript
function f(a){
    return function(b){
        return `${a} ${b}`;
    };
}
console.log(f(5)(6));

//sum of element
function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }

    }
}

console.log(sum(1)(2));

//
function evaluate(operation){
    return function(a){
        return function(b){
            if(operation=="sum") return a+b;
            else if(operation=="mutiply") return a*b;
            else if(operation=="divide") return a/b;
            else if(operation=="substract") return a-b;
            else return "Invalid operation";
        };
    };
}

const mul =evaluate("mutiply");
console.log(mul(2)(2));


//infinite currying

function add(a){
    return function(b){
        if(b) return add(a+b);
        return a;
    };
}
console.log(add(3)(2)(3)(1)());

