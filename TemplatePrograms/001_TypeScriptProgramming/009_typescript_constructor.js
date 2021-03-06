/******************************************************************************
+   Description : Usage of Classes - Constructor
+   Author      : WebStack Academy (P) Limited
+   Date        : 20/01/2018
/******************************************************************************/
// Class 
var MyInputs = /** @class */ (function () {
    function MyInputs(val1, val2) {
        this.x = val1;
        this.y = val2;
    }
    MyInputs.prototype.add = function () {
        console.log("The addition is " + (this.x + this.y));
    };
    MyInputs.prototype.sub = function () {
        console.log("The subtraction is " + (this.x - this.y));
    };
    return MyInputs;
}());
// Object 
var currentInput = new MyInputs(100, 50);
// Call methods now 
currentInput.add();
currentInput.sub();
