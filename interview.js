const LinkedList = require("./linkedlist-class");

// 1. Given a document, implement an algorithm to count the number of word occurrences.
// - Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// - Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

function numWordOccurrences(str) {
  const wordsWithCount = {};
  // return object with num of occs

  // split string into an array
  const regExp = /[`!@#$%^&*()_+\\0-9=\[\]{};':"\\|+,.<>\/?~]/g;
  const wordsArr = str.replace(regExp, "").split(" ");

  // remove the special characters (punctation)

  for (var i = 0; i < wordsArr.length; i++) {
    if (!wordsWithCount[wordsArr[i]]) {
      wordsWithCount[wordsArr[i]] = 1;
    } else {
      wordsWithCount[wordsArr[i]] += 1;
    }
  }

  // iterate over array and add to object
  // if obj[i] doesn't exist, add it
  //otherwise count ++

  // alternatively: best answer:
  //   str.split(" ").forEach((word) => {
  //     const numberOfOccurrences = str.match(new RegExp(word, "g")).length;
  //     console.log(`${word}: ${numberOfOccurrences}`);
  //   });

  return wordsWithCount;
}

console.log(
  numWordOccurrences(
    "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"
  )
);

// 2. Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.

function deleteDupNums(lst) {
  // creating LL

  let current = lst.head;
  // head = beginning of the list
  // while (current) {
  // if beginning of list does not equal null, continue
  // let newNode = current;
  while (current.next) {
    // while next node on list does not equal null
    if (current.next.value === current.value) {
      // if the next value equals current value on linked list
      current.next = current.next.next;
      // delete (skip) the next value
    } else {
      current = current.next;
      // otherwise return unchanged linked list
    }
    // }
    // current = current.next;
    //
  }
  // to display it
  function display(llist) {
    let currNode = llist.head;
    while (currNode) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }
  return display(lst);
}
let lst = new LinkedList();
lst.insertFirst(1);
lst.insertLast(2);
lst.insertLast(2);
lst.insertLast(2);
lst.insertLast(3);

deleteDupNums(lst);

// 3. Given a string, write an algorithm to count the number of words in the string that are palindromes.
// The output must include a list of the palindromes and the number of palindromes.
//  - Input: `"Dad gave mom a Tesla as a racecar"`
//  - Output: `Dad, mom, racecar, 3 Palindromes`

function numOfPalindromes(str) {
  const words = str
    .replace(/[,`?!]/g, "")
    .toLowerCase()
    .split(" ");
  let stack = [];
  let count = 0;

  for (var i = 0; i < words.length; i++) {
    let tempWord = words[i];
    if (tempWord.length > 1) {
      if (tempWord === tempWord.split("").reverse().join("")) {
        stack.push(tempWord);
        count += 1;
      }
    }
  }
  return `${stack.join(" ")}, ${count} Palindromes`;
}

console.log(numOfPalindromes("Dad gave mom a Tesla as a racecar"));

// 4. Explain how a hash table works.

// - Hash tables are used to quickly store and retrieve data (or records).
// - Records are stored in buckets using hash keys
// - Hash keys are calculated by applying a hashing algorithm to a chosen value (the key value)
// contained within the record. This chosen value must be a common value to all the records.
// - Each bucket can have multiple records which are organized in a particular order.

// 5. Given 2 linked lists, where each node in each linked list represents a
// character in a string, write a function compare() that compares the 2 strings,
// i.e., it returns 0 if both strings are the same, 1 if the 1st linked list is
// lexicographically greater, and -1 if the 2nd string is lexicographically greater.

// - Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o`
// - Output: `1`

// - Input: `list 1: B->i->l->b->o, list 2: B->i->l->b->o`
// - Output: `0`

// - Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o->b`
// - Output: `-1`

function compare(lst1, lst2) {
  function toString(LL) {
    let tempNode = LL.head;

    let word = "";
    while (tempNode) {
      word += tempNode.value;
      tempNode = tempNode.next;
    }
    return word;
  }
  let a = toString(lst1);
  let b = toString(lst2);
  console.log(a);
  return console.log(a.localeCompare(b));
}
let LL1 = new LinkedList();
LL1.insertFirst("A");
LL1.insertLast("B");
LL1.insertLast("C");
LL1.insertLast("D");

let LL2 = new LinkedList();
LL2.insertFirst("A");
LL2.insertLast("B");
LL2.insertLast("C");
LL2.insertLast("E");

console.log(compare(LL1, LL2));

// 6. Given a list of integers find the mode and the frequency of the mode.
// The mode in a list of numbers is the value that occurs the most often.
// If no number in the list is repeated, then there is no mode for the list.
// - Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
// - Output: `Mode = 3, Frequency of mode = 4`

function modeAndFreq(str) {
  const arr = str.replace(",", "").split(" ");
  let obj = {};
  let maxFreq = 0;
  let maxValue = 0;

  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  const keys = Object.keys(obj);
  for (var j = 0; j < keys.length; j++) {
    let value = obj[keys[j]];
    if (value > maxFreq) {
      maxFreq = value;
      maxValue = keys[j];
    }
  }
  return `Mode = ${maxValue} Frequency = ${maxFreq}`;
}
console.log(modeAndFreq("1, 2, 3, 6, 10, 3, 5, 6, 3, 3"));
