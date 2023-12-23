# My solution

The goal of this challenge is to remove all the key-value pairs of an object whose key is prefixed with `naughty_`. Similarly to challenge 07 we use `as`, but this time we do a sort of pattern matching, where the pattern is `naughty_${string}`. To exclude the matching pairs we use `never`.

An alternative, more straightforward solution, is possible if we use the `Omit` utility type.
