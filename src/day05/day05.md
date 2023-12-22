## My solution

The task is to create a type that merges together two arrays. As we can see from the tests, arrays can contain both strings and numbers. We created a generic type `SantasList<T extends readonly any[], M extends readonly any[]>`. We should note two interesting things about this type:

1. We use the `extends` interface to constrain the generic parameters `T` and `M`. In this case we are saying that `T` and `M` should be of type `any[]`. If, instead of `any[]`, we used an object like `{ length: number }` then our type would error if we wouldn't input an object that does not _at least_ contain `length: string`.
2. We write `readonly any[]`, why is that? because the arrays we are working with are not quite normal arrays, they are _tuples_. A tuple is like an array but with more type-safety, i.e. when cannot change its content, for example by accessing indexes or using the built-in `.push()` method. We can see that inputs in tests will be tuples from the `as const` expression. To conclude, `readonly` is a way of saying "those arrays must be tuples!", which makes sense because if something is readonly it cannot be mutated.
