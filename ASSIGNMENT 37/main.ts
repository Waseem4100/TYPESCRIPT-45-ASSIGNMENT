//QUESTION # 37
/**37. Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message. */


function make_shirt(size: string = "large", message: string = "I LOVE TYPESCRIPT"){
    console.log(`you have selected ${size} size shirt with ${message} print on shirt `)
}

make_shirt()

