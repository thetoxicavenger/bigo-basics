/* 
Basic Examples
*/

// Constant time O(1)
function constantTime(items) {
    console.log(items)
}

// Linear time O(n)
function linearTime(items) {
    items.forEach(item => {
        console.log(item)
    });
}

// Quadratic time O(n^2)
function quadraticTime(items) {
    items.forEach(firstItem => {
        items.forEach(secondItem => {
            console.log(firstItem, secondItem)
        })
    })
}

/* 
Analyzing Big O w/ caveats
*/

// ignore constants
function ignoreConstants(items){
    items.forEach(item => { // O(n)
        console.log(item)
    })
    items.forEach(item => { // O(n)
        console.log(item)
    })
    // O(n) + O(n) = O(2n) = O(n)
}

// drop non-dominant terms
function dropNonDominantTerms(items) {
    console.log(items[0]) // O(1)
    items.forEach(firstItem => { // O(n^2)
        items.forEach(secondItem => {
            console.log(firstItem, secondItem)
        })
    })
    items.forEach(item => { // O(n)
        console.log(item)
    })
    // O(1) + O(n^2) + O(n) = O(n^2)
}

// different inputs get different variables
function differentInputsDifferentVariables(listA, listB) {
    let sum = 0
    listA.forEach(listAItem => {
        listB.forEach(listBItem => {
            sum += listAItem + listBItem
        })
    })
    // this is NOT O(n^2) because there are two different inputs that we have to
    // account for. Therefore, it is O(a*b).
}



