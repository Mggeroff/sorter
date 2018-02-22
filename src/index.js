class Sorter {
    constructor() {
        // create empty array.
        this.array = [];
        // Sort numbers in an array in ascending order.
        this.ascendingOrder = function (a, b) {
            return a - b;
        }
    }

    // add element and store it in any way inside
    add(element) {
        // push elements to created array.
        this.array.push(element);
    }

    at(index) {
        // return a specific element from array
        return this.array[index];
    }

    //  return the count of current elements
    get length() {
        // Return the count of current elements, which were added to Sorter instance via add method.
        return this.array.length;
    }

    // return all elements in array
    toArray() {
        // Return all elements in array.
        return this.array;
    }

    // 'sort' - takes indices of already added elements and sorts only these elements.
    sort(indices) {
        let tempArray = [];
        for (let i = 0; i < indices.length; i++) {
            tempArray.push(this.array[indices[i]]);
        }
        tempArray.sort(this.ascendingOrder);
        indices.sort();
        for (let i = 0; i < indices.length; i++) {
            this.array[indices[i]] = tempArray[i];
        }
    }

    // setComparator - takes compareFunction as parameter and use it while sorting elements.
    setComparator(compareFunction) {
        // return this.array.sort(compareFunction);

        /*
        !!! no need in return anything
            the function must just set the way we compare elements.
        */
        this.ascendingOrder = compareFunction;
    }
}

module.exports = Sorter;
