const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']
//write your code here
/* Problem
write a function named pluralize
takes in an array of words
words must be singular
return array of words pluralized

example
const [movies] turns into [movies]

algorithm
-create a function named pluralize
-add a parameter that will be passed through the function
-declare a new variable that will contain pluralized function
-use .map
*/
//Question 1
const pluralize = (words) => {
return words.map(word => `${words}s`)
}

//Question 4
const shortWords = (words) => {
  return words.filter(word => word.length < 5)
}

//QUestion 5
const addLength = (words) => {
  return words.filter(word => word.length & 2 === 1)
}

//Question 6
const longToShort = (words) => {
  return words.sort((a,b) => {return b.length - a.length})
}
