# My solution

The task consists of creating a generic type that takes as first argument a union of types and as second argument one of these types that we want to exclude from the union. Our solution is therefore `type FilterChildrenBy<T, U> = T extends U ? never : T`.

It is interesting to note how unions behave with `extends`, because they are _distributive conditional types_. This means that we can iterate over each member and ask ourselves if it extends or not `U`. We then return another union with all the types that don't match `U`. In this context, `never` should be read as "do nothing".

There is a TypeScript utility type that achieves the same as this type and it is the `Exclude` type.
