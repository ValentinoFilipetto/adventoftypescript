# My solution

The goal of this challenge is to create a type that reverses a string. Our solution uses recursion and for the first time we make use of `infer`. As far as I understand it, `infer` is useful if we want to do pattern matching, but other uses are probably possibile. In this case, `infer` is necessary because we want to let TypeScript know that `Head` and `Tail` are type parameters that are part, segments, of `S`, and not some other generic parameters.

It's not exactly clear to me how TypeScript knows that `Head` should be the first letter of `S` and `Rest` the rest of it. If `S` is `"hello"`, our boi ChatGPT gives the following answer:

> When you have `S` extends `{infer Head}${infer Tail}`, TypeScript looks at the structure of the string `S` and infers the first part as head and the remaining part as tail. It doesn't know in advance that "h" is the first character and "ello" is the rest; instead, it infers these based on the usage in the template literal type.
