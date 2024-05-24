class Fibonacci {
    // Generators
    *execute(input, current = 0, next = 1) {
        if (input === 0)
            return 0;

        // Retornando valores sob demanda
        yield current;

        // Delegando função, mas sem retornar valor
        yield* this.execute(input - 1, next, current + next);
    }
}

module.exports = Fibonacci;