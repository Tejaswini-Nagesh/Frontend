
/*interview question

var name="john";
function print(){
    let name="abc"
    console.log(name);
    function display()
    {
        console.log(name);
    }
    name="xyz";
    display();
}
print();
*/

//2.
{
    var a=5;

}
console.log(a);


//3.

function test(){
    var a="Hello";
    let b="bye";

    if(true){
        let a="Hi";
        var b="Goodbye";
        console.log(a);
        console.log(b);
    }
}
//test(); because of let b and var b gives error