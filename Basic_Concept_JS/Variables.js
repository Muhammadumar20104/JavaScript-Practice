// constant ko use kr ne ka ik hi way hai magar variable ko use kr ka two ways hai ik let dosra var
// phele var ko use kr te the magar ik masla ye tha kah var scope pr km ni kr ta tha agar hume scope per km kr na matlab scope ye kah {} braces ko scope kah te hai 
// ap prefer kre let ko var ko ni 

const accountId=201031
let accountEmail="raoumar201@gmail.com"
var accountPassword="12345"

// agar ap variable ke saat let or var use ni kr te to ap tab bhi variable use kr sakh te hai  jese neche kaha hai
accountCity="SDK"
// agar me variable ko define kr do or value na do to console per ye muje undefine deye ga 
let accountGender

accountEmail="djsdioasj"
accountPassword=2233
accountCity="RYK"
// accountId=20104   If Any Variable Use const keyword it mean that I could not change My the Value
console.log(accountId);
// agar hum ne zaiyada variable use kr ne hai to table bhi use kr sakh te hai  jese neche kaha hai
console.table([accountId,accountEmail,accountPassword,accountCity,accountGender])