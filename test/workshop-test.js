import { describe, Try } from 'riteway'
import exercises from '../workshop'

describe('tripleAll', async assert => {
  assert({
    given: 'empty array',
    should: 'return empty array',
    actual: exercises.tripleAll([]),
    expected: []
  })

  assert({
    given: 'array of numbers',
    should: 'return an array where each element has been tripled',
    actual: exercises.tripleAll([1,2,3,4,5]),
    expected: [3,6,9,12,15]
  })
})

describe('upperCaseNames', async assert => {
  assert({
    given: 'empty array',
    should: 'return empty array',
    actual: exercises.upperCaseNames([]),
    expected: []
  })

  const people = [ {name: 'Bob'}, {name: 'joe'}, {name: 'emily'} ]

  assert({
    given: 'array of people objects',
    should: 'return an array of those people\'s names, uppercased',
    actual: exercises.upperCaseNames(people),
    expected: ['BOB', 'JOE', 'EMILY']
  })
})

describe('userLinks', async assert => {
  assert({
    given: 'empty array',
    should: 'return empty array',
    actual: exercises.userLinks([]),
    expected: []
  })

  const users = [
    { email: 'bob@bob.com', username: 'bobsled99', age: 30 },
    { email: 'joe@woohoo.com', username: 'joemamma', age: 22 },
    { email: 'sierra@coldmail.com', username: 'sierramyst', age: 24 },
    { email: 'test@test.com', username: 'test', age: 24 },
  ]


  const links = [
    '<a href="/users/bobsled99">bobsled99</a>',
    '<a href="/users/joemamma">joemamma</a>',
    '<a href="/users/sierramyst">sierramyst</a>',
    '<a href="/users/test">test</a>'
  ]

  assert({
    given: 'array of user objects',
    should: 'return an array of links to user page',
    actual: exercises.userLinks(users),
    expected: links
  })
})

describe('getApplicantEmails', async assert => {
  assert({
    given: 'empty array',
    should: 'return empty array',
    actual: exercises.getApplicantEmails([]),
    expected: []
  })

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

  assert({
    given: 'array of people objects',
    should: 'return an array of emails, only those who are over 18 and who took the advanced js course',
    actual: exercises.getApplicantEmails(applicants),
    expected: [applicants[0].email, applicants[2].email]
  })
})

describe('mergeObjects', async assert => {
  assert({
    given: 'empty array',
    should: 'return empty object',
    actual: exercises.mergeObjects([]),
    expected: {}
  })

  const objects = [{a:1}, {b:2}, {c:3, d:4}]

  assert({
    given: 'array of objects',
    should: 'return 1 object with all key/value pairs of all objects combined',
    actual: exercises.mergeObjects(objects),
    expected: Object.assign(...objects)
  })
})


