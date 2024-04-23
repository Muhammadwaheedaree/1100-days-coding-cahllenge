//Unchange Magecians:
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];

    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }

    return greatMagicians;
}

const magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

const greatMagicians: string[] = make_great([...magicians]); // Creating a copy using spread operator

console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
