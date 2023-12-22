# My solution

The solution makes us of a [generic type](https://www.typescriptlang.org/docs/handbook/2/generics.html), i.e. `CookieSurveyInput<T>`. The generic parameter `T` in this case will be an object and the aim is to extract its keys to a union of literals: that's what the [keyof](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html) operator accomplishes.
