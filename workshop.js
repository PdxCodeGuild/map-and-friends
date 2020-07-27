
// lets say we wanted to double every number in an array...
// Taking one array, and making a new one by transforming each element
// is exactly what map is for!
//
// map is accessed off of an array object, and it takes in a transform function
// as an argument. Here we pass the double function in as the transform function.

const double = x => x * 2
const evenNumbers = [1,2,3,4,5].map(double) // this returns [2,4,6,8,10]


// we could make a reusable function that doubles all elements in an array
const doubleAll = xs => xs.map(double)


// if we didn't want to define a double function beforehand, we could define it on the spot.
const doubleAll2 = xs => xs.map(x => x * 2)

// doubleAll and doubleAll2 are equivalent.

// notice we named our array parameter "xs". That is a common convention to mean
// "list of x values". Adding an "s" to make the "x" plural gives us "xs".

// Exercise: tripleAll

// Try making a function that triples all elements in an array.
// replace undefined with a function.
const tripleAll = xs => undefined


// map is not just for simple arithmetic on numbers. It also comes in handy when
// working with strings. This function will return an array of lowercased strings.

const lowerCaseAll = strings => strings.map(s => s.toLowerCase())

const names = ['Ben Bitdiddle', 'Eva Lu Ator', 'Alyssa P. Hacker']
const lowerCaseNames = lowerCaseAll(names) // ['ben bitdiddle', 'eva lu ator', 'alyssa p. hacker']

// Once again, notice how map returns a new array, with each element of the
// original being transformed. Note however, that the original array remains.
// map does not mutate the values from the original array. It returns a new array,
// leaving the old array as it was.

// names still equals ['Ben Bitdiddle', 'Eva Lu Ator', 'Alyssa P. Hacker'] 
// even though lowerCaseNames equals ['ben bitdiddle', 'eva lu ator', 'alyssa p. hacker']

// Perhaps most commonly, map is used with objects.
//
// The following function (pluckNames) pulls out the name field from the objects.

const pluckNames = people => people.map(person => person.name)

const people = [ { name: 'Bob' }, { name: 'Sarah' }, { name: 'Daniel' }]

const peopleNames = pluckNames(people) // [ 'Bob', 'Sarah', 'Daniel' ]

// Notice how all these functions could have been defined with a for loop instead.

const doubleAll3 = xs => {
  const doubled = []

  for (let i = 0; i < xs.length; i++) {
    doubled.push(xs[i] * 2)
  }

  return doubled
}

const lowerCaseAll2 = strings => {
  const lowerCased = []

  for (let i = 0; i < strings.length; i++) {
    lowerCased.push(strings[i].toLowerCase())
  }

  return lowerCased
}

// notice the general pattern.

// 1. create a new array
// 2. loop through the argument array
//     3. transform each value
//     4. push the transformed value to the new array
// 5. return the new array

// Since this is such a common pattern, map seeks to abstract it all into one function.
// If you ever find yourself writing a for loop that follows the above pattern,
// you should try to refactor it to use map instead!

// Lets try that now. 

const upperCaseNamesForLoopVersion = people => {
  const upperedNames = []

  for (let i = 0; i < people.length; i++) {
    upperedNames.push(people[i].name.toUpperCase())
  }

  return upperedNames
}

// Exercise: upperCaseNames
// Rewrite the above function by using map instead of a for loop.
// replace undefined with your function definition
const upperCaseNames = undefined

// Notice that using map is much shorter, easier to write, easier to 
// read (once you get used to it) and easier to debug.

// I can't remember how many times I've messed up a simple for loop...
// Forgetting to return, loop one too many times, etc.
// Using map, there is no chance to mess something like that up! It's taken care of.

// Map also comes in handy when you want to convert data into html or DOM nodes.

// this function will wrap all elements with div tags
const wrapInDiv = xs => xs.map(x => `<div>${x}</div>`)

// What would this output?  wrapInDiv(upperCaseNames(people))


// Exercise: userLinks

// Create a function that given a list of user objects, returns a list of links
// to user profile pages.
// Hint: pull out the username field, and wrap it in an achor tag. Set the value to the username. 
// For the href of the anchor tag, set it to '/users/<username>' where <username>
// is the actual username of the user.

const users = [
  { email: 'bob@bob.com', username: 'bobsled99', age: 30 },
  { email: 'joe@woohoo.com', username: 'joemamma', age: 22 },
  { email: 'sierra@coldmail.com', username: 'sierramyst', age: 24 },
]

// userLinks(users) should give us:

// [
//   '<a href="/users/bobsled99">bobsled99</a>',
//   '<a href="/users/joemamma">joemamma</a>',
//   '<a href="/users/sierramyst">sierramyst</a>'
// ]


// replace undefined with your function definition
const userLinks = undefined


// That concludes the map section!
//
// Enjoy this new tool in your toolbelt!
//
// There are, however, a couple of other tools that come in handy alongside map.
// If map is a hammer, than filter is a screwdriver, and reduce is super glue.
// You wouldn't set out to build something with only a hammer!
// Between map, filter, and reduce, you will barely ever need for-loops.


// Filter
//
// filter is a lot like map. It loops over an array, and returns a new array.
// The difference is it doesn't transform the array, but rather it filters it.

const isOdd = n => n % 2 !== 0
const oddNumbers = [1,2,3,4,5].filter(isOdd) // [1,3,5]

// Notice how we passed in a 5 element array, and we got back a 3 element array.
// Filter will return a copy of the original array, minus elements that don't
// pass the predicate function. (A predicate function is a function that returns
// true or false).

// Here's another example. Here we filter out people that didn't take the advanced js course.

const applicants = [
  {
    email: 'bob@bob.com',
    name: 'Bob',
    age: 30,
    advancedJSCourse: true
  },
  {
    email: 'joe@woohoo.com',
    name: 'Joe',
    age: 22,
    advancedJSCourse: false
  },
  {
    email: 'sierra@coldmail.com',
    name: 'Sierra',
    age: 24,
    advancedJSCourse: true
  },
  {
    email: 'Kevin@mswin.com',
    name: 'Kevin',
    age: 17,
    advancedJSCourse: true
  }
]

// toBeInterviewed should contain only the Bob and Sierra objects.
// Joe has been filtered out.
const toBeInterviewed = applicants.filter(applicant => applicant.advancedJSCourse)

// Exercise: getApplicantEmails
//
// Write a function that takes in a list of applicants, and returns an array of emails.
// But only return a users email if they took the advancedJSCourse, AND if they are 18 years or older.
// Use map and filter. No for-loops.
// Hint: You can chain a .map off of the result of a .filter.

const getApplicantEmails = undefined

// Reduce
//
// reduce, unlike map and filter, is for "reducing" an array to a single value.
// Another common pattern in for-loops is to loop over an array and "accumulate"
// some value, then return the value. Reduce abstracts this pattern.

// example: getting the sum of all numbers in an array.

const sum1 = xs => {
  let total = 0

  for (let i = 0; i < xs.length; i++) {
    total += xs[i]
  }

  return total
}

// sum1([1,2,3,4]) -> 10

// Notice how we "accumulate" values into the variable total.
// In this case we add numbers up, but this is a general pattern that applies
// to many situations.

// We can rewrite sum using reduce:

const sum2 = xs => xs.reduce((total, x) => total + x)

// sum1 and sum2 are equivalent

// The first argument in the callback (above called "total") is the "accumulator".
// The second argument in the callback (above called "x") is the current value from the array.
// Upon each iteration through the array, "x" will be assigned to be the next value.
// The accumulator will be assigned to whatever was returned in the last iteration.
// In this case, we return total + x, meaning we return the sum of the numbers so far.

// The accumulator will start with the value of the first element int the array.
// In many instances it makes sense to start the accumulator with a different value.
// Reduce takes in an optional second argument for this purpose.
// For example, here we pass in 0 so that the accumulator starts out at 0.

// how many people took the advanced course?
const numberOfAdvancedGrads = 
  applicants
    .reduce((accum, applicant) => applicant.advancedJSCourse ? accum + 1 : accum, 0)

// we use the ternary operator (predicate ? resultIfTrue : resultIfFalse) to
// add 1 to the accumulator if the applicant took the course. If the applicant
// did not take the course, we just return the accumulator unchanged.

// Note: we also could have written this using filter and .length:
const numberOfAdvancedGrads2 = 
  applicants.filter(applicant => applicant.advancedJSCourse).length

// using this method, we filter out the people who didn't take the course, and then
// we just grab the length of the array.
// This is partly because .length "reduces the array to a single value".
// In this case, I prefer the filter version. I think it is more readable.
// In general, reduce can be hard to read. However, it still has benefits over
// for-loops for the aforementioned reasons.

// Exercise: mergeObjects
//
// Using reduce, merge all objects into 1 object.
// Place all the key/value pairs from all objects into 1 object.
// Hint: pass in an empty object for the defualt value of the accumulator.
//
// Note: there is a built-in function called Object.assign that pretty much does this.
// So don't use Object.assign to implement this. Use reduce.
// You can use the spread operator (...) if you want, which may make things easier.

const mergeObjects = undefined

// Congratulations on finishing!
//
// Enjoy your new tools, and try to write less for-loops!

export default {
  tripleAll,
  upperCaseNames,
  userLinks,
  getApplicantEmails,
  mergeObjects,
}

