const CommandExecutor = require('./app.js');

describe('CommandExecutor', () => {
    let executor;

    beforeEach(() => {
        executor = new CommandExecutor();
    });

    test('should execute a valid command', () => {
        return executor.executeCommand('echo "Hello, World!"')
            .then(output => {
                expect(output).toBe('Hello, World!\n');
            })
            .catch(err => {
                throw new Error(`Test failed with error: ${err}`);
            });
    });

    test('should reject with error for invalid command', () => {
        return executor.executeCommand('invalidcommand')
            .catch(err => {
                expect(err).toMatch(/not found|failed/);
            });
    });

    test('should execute a valid command with callback', done => {
        executor.executeCommand('echo "Hello, World!"', (error, output) => {
            try {
                expect(error).toBeNull();
                expect(output).toBe('Hello, World!\n');
                done();
            } catch (err) {
                done(err);
            }
        });
    });

    // Aumentando o tempo limite do teste
    test('should execute an invalid command with callback', done => {
        executor.executeCommand('invalidcommand', (error, output) => {
            try {
                expect(error).toMatch(/not found|failed/);
                expect(output).toBeNull();
                done();
            } catch (err) {
                done(err);
            }
        }).catch(err => {
            if (!done.called) done(err);
        });

        done.called = false;

        const originalDone = done;
        done = (err) => {
            if (!done.called) {
                done.called = true;
                originalDone(err);
            }
        };
    }, 10000); // Define o tempo limite do teste para 10 segundos
});