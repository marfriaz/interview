const LinkedList = require("./linkedlist-class");

// 1. Given a document, implement an algorithm to count the number of word occurrences.
// - Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// - Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

function numWordOccurrences(str) {
  let words = str.replace(/[,?]/g, "").toLowerCase().split(" ");

  let wordOccurrences = {};

  for (var i = 0; i < words.length; i++) {
    if (!wordOccurrences[words[i]]) {
      wordOccurrences[words[i]] = 1;
    } else {
      wordOccurrences[words[i]] += 1;
    }
  }
  return wordOccurrences;
}
console.log(
  numWordOccurrences(
    "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"
  )
);

// 2. Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.
function deleteDupNums(LL) {
  let currNode = LL.head;

  while (currNode.next) {
    if ((currNode.next.value = currNode.value)) {
      currNode.next = currNode.next.next;
    } else {
      currNode = currNode.next;
    }

    // compare the head with the head.next
    // if theyre the same make head.next = head.next.next
    // else just make head.next = head.next

    function display(llist) {
      let currNode = llist.head;
      while (currNode) {
        console.log(currNode.value);
        currNode = currNode.next;
      }
    }
    return display(LL);
  }
}

// let LL1 = new LinkedList();
// LL1.insertFirst(1);
// LL1.insertLast(2);
// LL1.insertLast(2);
// LL1.insertLast(3);

// deleteDupNums(LL1);

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

function compare(ll1, ll2) {
  function toString(ll) {
    let str1 = "";
    let currNode = ll.head;

    while (currNode) {
      str1 += currNode.value;
      currNode = currNode.next;
    }
    return str1;
  }
  let string1 = toString(ll1);
  let string2 = toString(ll2);
  console.log(string1);

  return console.log(string1.localeCompare(string2));
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
