var a=12;
var b=1;
const c=parseInt( a.toString().split('').reverse().join('') )
console.log(c)
console.log(umarFunction(a,b))
function umarFunction(a,b) {
	if ( a < 10 && b < 10 ) {
		return a*b;
	} else { 
   if ( a == b ) {
	  	let _a = parseInt( a.toString().split('')[0] );
        console.log(_a)
		  let _b = parseInt( b.toString().split('')[0] );
		return _a*_b;
	 } else if ( a < b ) {
		return parseInt( a.toString().split('').reverse().join('') );
	 } else if ( a > b ) {
		return parseInt( b.toString().split('').reverse().join('') );
	 }
	}	

}
var a=345;
var b=parseInt( a.toString().split('').reverse().join(''));
console.log(b);