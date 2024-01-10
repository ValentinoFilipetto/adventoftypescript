import { Equal, Expect } from "../../testing-types";

/* Solution */

type MyRange<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N ? [...Acc, N] : MyRange<N, [...Acc, Acc["length"]]>;

type MyExclude<A extends any[], B extends any[]> = Exclude<
  A[number],
  B[number]
>;

type DayCounter<L extends number, H extends number> = MyExclude<
  MyRange<H>,
  MyRange<L> extends [...infer Val, infer Last] ? Val : never
>;

/* Challenge */

type TwelveDaysOfChristmas = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type test_0_actual = DayCounter<1, 12>;
//   ^?
type test_0_expected = TwelveDaysOfChristmas;
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type DaysUntilChristmas =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25;
type test_1_actual = DayCounter<1, 25>;
//   ^?
type test_1_expected = DaysUntilChristmas;
type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;
