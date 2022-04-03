const Pick = <T, K extends keyof T>(
  Class: new () => T,
  keys: K[]
): new () => Pick<T, typeof keys[number]> => Class;

export const PickForFixedLength2 = Pick<number[], 0 | 1>(Array, [0, 1]);
export const PickForFixedLength3 = Pick<number[], 0 | 1 | 2>(Array, [0, 1, 2]);
export const PickForFixedLength4 = Pick<number[], 0 | 1 | 2 | 3>(
  Array,
  [0, 1, 2, 3]
);

export const PickForFixedLength3x3 = Pick<
  Pick<number[], 0 | 1 | 2>[],
  0 | 1 | 2
>(Array, [0, 1, 2]);

export const PickForFixedLength4x4 = Pick<
  Pick<number[], 0 | 1 | 2 | 3>[],
  0 | 1 | 2 | 3
>(Array, [0, 1, 2, 3]);
