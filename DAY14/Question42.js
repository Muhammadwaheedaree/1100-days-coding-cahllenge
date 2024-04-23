// Greate Magition:
//Magition:
var magitions = ["Alice", "David", "Chris"];
function show_magition(magitions) {
    magitions.forEach(function (magition) {
        console.log(magition);
    });
}
show_magition(magitions);
function make_greate(magitions) {
    for (var i = 0; i < magitions.length; i++) {
        magitions[i] = magitions[i] + "the Greate";
    }
}
make_greate(magitions);
show_magition(magitions);
