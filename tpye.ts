type NestedArray<T> = T | NestedArray<T>[];

const nums: NestedArray<number> = [1, 2, 3, [1, 2, 3, [2]]];
