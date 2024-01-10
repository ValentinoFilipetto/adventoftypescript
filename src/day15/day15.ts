import { Equal, Expect } from "../../testing-types";

/* Solution */

type BoxToys<T extends string, N extends number> = N extends 1
  ? [T]
  : N extends 3 | 4
  ? [T, T, T, ...(N extends 4 ? [T] : [])]
  : never;

/* Challenge */

type test_doll_actual = BoxToys<"doll", 1>;
//   ^?
type test_doll_expected = ["doll"];
type test_doll = Expect<Equal<test_doll_expected, test_doll_actual>>;

type test_nutcracker_actual = BoxToys<"nutcracker", 3 | 4>;
//   ^?
type test_nutcracker_expected =
  | ["nutcracker", "nutcracker", "nutcracker"]
  | ["nutcracker", "nutcracker", "nutcracker", "nutcracker"];
type test_nutcracker = Expect<
  Equal<test_nutcracker_expected, test_nutcracker_actual>
>;
