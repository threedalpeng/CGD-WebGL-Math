type TupleOf<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _TupleOf<T, N, []>
  : never;
type _TupleOf<T, N extends number, R extends unknown[]> = R["length"] extends N
  ? R
  : _TupleOf<T, N, [T, ...R]>;

export type Tuple2 = Omit<TupleOf<number, 2>, keyof number[]> & {
  [k in 0 | 1]: number;
};
export type Tuple3 = Omit<TupleOf<number, 3>, keyof number[]> & {
  [k in 0 | 1 | 2]: number;
};
export type Tuple4 = Omit<TupleOf<number, 4>, keyof number[]> & {
  [k in 0 | 1 | 2 | 3]: number;
};

export type Tuple3x3 = Omit<TupleOf<Tuple3, 3>, keyof Tuple3[]> & {
  [k in 0 | 1 | 2]: Tuple3;
};
export type Tuple4x4 = Omit<TupleOf<Tuple4, 4>, keyof Tuple4[]> & {
  [k in 0 | 1 | 2 | 3]: Tuple4;
};
