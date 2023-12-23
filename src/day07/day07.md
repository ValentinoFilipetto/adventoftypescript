# My solution

This challenge consists of creating a generic type that takes an object as argument and prefix every key with the string `"_good"`.

The key here is the `as` keyword, which is basically saying to change every `K` into (as) `good_K`. It is also important to note that, without stating that `K` must be a string (`& string`) we would get an error, as at that point `K` could be anything (a number, for example) and therefore it might not make sense to prefix it with `good_`; `& string` makes sure that we take into account only the keys that are strings.
