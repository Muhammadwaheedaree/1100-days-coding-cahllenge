// Self runnig user profile:
var userProfile = (function () {
    var name = "waheed";
    var age = "21";
    return {
        displayInfo: function () {
            console.log("Name ".concat(name, ", Age ").concat(age));
        },
    };
})();
userProfile.displayInfo();
