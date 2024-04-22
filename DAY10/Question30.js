var username = ["admin", "user1", "user2", "user3", "user4"];
username.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin,would you like to see a status report?");
    }
    else {
        console.log("Hwllo ".concat(username, ", thank you for logging in again."));
    }
});
