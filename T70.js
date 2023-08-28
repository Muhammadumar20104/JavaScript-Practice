class ClassName {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
        this.fullname = fname + lname;
        this.intialname = fname.charAt(0).toUpperCase() +"."+ lname.charAt(0).toUpperCase()


    }
}
a1 = new ClassName("john", "Smith");
console.log(a1.fname)
console.log(a1.lname)
console.log(a1.fullname)
console.log(a1.intialname)
