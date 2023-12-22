# My solution

The task is to construct a type that accepts as input an object and replaces its value with the type `Address`. We do so with the generic type `PresentDeliveryList<T>`, which exploits `[K in keyof T]`: this expression iterates over the keys `K` of `T` and we use it to associate the type `Address` to each `K`.
