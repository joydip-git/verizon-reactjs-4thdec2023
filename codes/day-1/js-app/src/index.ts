interface MathOps<T, TResult> {
    add(a: T, b: T): TResult;
}
class MathOperations implements MathOps<number, number> {
    add(a: number, b: number): number {
        return a + b
    }
}