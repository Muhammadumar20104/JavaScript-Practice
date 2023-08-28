var date = new Date(2022, 11, 4);
var crismis_date = new Date(2022, 11, 4);
functionName(date, crismis_date)
function functionName(date, crismis_date) {
    if (date.getMonth() === crismis_date.getMonth()) {
        if (date.getDate() === crismis_date.getDate()) {
            // console.log(date.getDate())
            console.log(true)
        }
    }
    else {
        console.log(false)
    }

}