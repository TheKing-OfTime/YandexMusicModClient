const chalk = require('chalk');
const ora = require('ora');

/**
 * Глобальные настройки
 */
const isTTY = process.stdout.isTTY;
const isVerbose = process.argv.includes('--verbose') || process.env.DEBUG;
const noSpinner = process.argv.includes('--no-spinner');

let indentLevel = 0;
const indent = () => '  '.repeat(indentLevel);

/**
 * Базовый вывод
 */
function write(prefix, color, ...args) {
    console.log(indent() + chalk[color](prefix), ...args);
}

/**
 * Публичный логгер
 */
const logger = {
    info(...args) {
        write('ℹ', 'gray', ...args);
    },

    success(...args) {
        write('✔', 'green', ...args);
    },

    warn(...args) {
        write('⚠', 'yellow', ...args);
    },

    error(...args) {
        write('✖', 'red', ...args);
    },

    debug(...args) {
        if (isVerbose) {
            write('…', 'dim', ...args);
        }
    },

    /**
     * Вложенный отступ (ручной)
     */
    indent(fn) {
        indentLevel++;
        try {
            return fn();
        } finally {
            indentLevel--;
        }
    },

    /**
     * Этап выполнения (spinner + скрытые логи)
     *
     * @param {string} title
     * @param {(log: ScopedLogger) => Promise<any>} fn
     */
    async stage(title, fn) {
        const logs = [];
        const start = Date.now();

        const scoped = createScopedLogger(logs);

        let spinner;
        if (isTTY && !noSpinner) {
            spinner = ora({
                text: indent() + chalk.bold(title),
                spinner: 'dots',
            }).start();
        } else {
            write('▶', 'cyan', title);
        }

        indentLevel++;

        try {
            const result = await fn(scoped);
            indentLevel--;

            const ms = Date.now() - start;

            if (spinner) {
                spinner.succeed(
                    indent() + chalk.bold(title) + chalk.dim(` (${ms}ms)`)
                );
            } else {
                write('✔', 'green', `${title} (${ms}ms)`);
            }

            if (isVerbose && logs.length) {
                logs.forEach(l => {
                    console.log(indent() + chalk.dim('│'), l);
                });
            }

            return result;
        } catch (err) {
            indentLevel--;

            if (spinner) {
                spinner.fail(indent() + chalk.bold(title));
            } else {
                write('✖', 'red', title);
            }

            logs.forEach(l => {
                console.log(indent() + chalk.dim('│'), l);
            });

            throw err;
        }
    },
};

/**
 * Scoped logger — живёт только внутри stage
 */
function createScopedLogger(buffer) {
    return {
        info(...args) {
            buffer.push(chalk.gray('ℹ ') + args.join(' '));
        },
        warn(...args) {
            buffer.push(chalk.yellow('⚠ ') + args.join(' '));
        },
        debug(...args) {
            if (isVerbose) {
                buffer.push(chalk.dim('… ') + args.join(' '));
            }
        },
        success(...args) {
            buffer.push(chalk.green('✔ ') + args.join(' '));
        },
    };
}

module.exports = logger;
