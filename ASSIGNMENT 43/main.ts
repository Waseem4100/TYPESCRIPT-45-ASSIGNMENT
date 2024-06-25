//QUESTION #43
/**43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.
 */


function show_magicians(magicians: string []){
    magicians.forEach(name => console.log(name ))
};

function make_great(magicians: string[]){
   return  magicians.map(name =>`The Great ${name}`)
};

let magician_names =[" harry houdini"," harry potter", " waseem"];

let copy_magicians = magician_names.slice()

let copy_great_magicians = make_great(copy_magicians)



show_magicians(copy_magicians);


show_magicians(copy_great_magicians);

