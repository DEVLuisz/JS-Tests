const n = 25;

// Upside Pyramid
for (let i = 1; i <= n; i ++) {
    for (let j = n; j > i; j --) {
        process.stdout.write(' ');
    }

    for (let k = 0; k < i * 2 - 1; k ++) {
        if (k === 0 || k === 2 * i - 2) {
            process.stdout.write('*');
        } else {
            process.stdout.write(' ');
        }
    }

    process.stdout.write('\n');
};

// Downside Pyramid

for (let i = 1; i <= n - 1; i ++) {
    for (let j = 0; j < i; j++) {
        process.stdout.write(' ');
    }

    for ( let k = (n - i) * 2 - 1; k >= 1; k --) {
        if ( k === 1 || k === (n - i) * 2 - 1) {
            process.stdout.write('*');
        } else {
            process.stdout.write(' ');
        }
    }
    process.stdout.write('\n');
};