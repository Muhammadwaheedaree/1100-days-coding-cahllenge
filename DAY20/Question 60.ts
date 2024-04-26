// Self runnig user profile:
let userProfile = (function () {
  let name = "waheed";
  let age = "21";
  return {
    displayInfo: function () {
      console.log(`Name ${name}, Age ${age}`);
    },
  };
})();
userProfile.displayInfo();
