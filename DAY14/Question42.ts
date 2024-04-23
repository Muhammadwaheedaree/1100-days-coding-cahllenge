// Greate Magition:
//Magition:
let magitions: string[] = ["Alice", "David", "Chris"];
function show_magition(magitions: string[]) {
  magitions.forEach((magition) => {
    console.log(magition);
  });
}
show_magition(magitions);

function make_greate(magitions: string[]) {
  for (let i = 0; i < magitions.length; i++) {
    magitions[i] = magitions[i] + "the Greate";
  }
}
make_greate(magitions);
show_magition(magitions);
