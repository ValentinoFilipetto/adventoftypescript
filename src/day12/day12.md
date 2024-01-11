# My solution

The goal here is to write a type that returns the index where Santa is located in the array.

We make use of a helper type called `TupleBefore`, which essentially, given an array `T`, returns the array before a certain element `U`. The resulting array is recursively constructed element by element by putting `F` (i.e. the first element) in front. Note that if the input is made of only one element (`Equal<F, U> extends true`) then the output is an empty array.

`FindSanta` exploits `["length"]` and takes care of the edge case in which Santa is actually not present in the array (i.e. if the length of `TupleBefore<T>` is the same as the length of `T`).
