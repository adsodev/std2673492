function printPattern(n) {
    for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < 2 * n - 1; j++) {
    if (j >= n - i - 1 && j <= n + i - 1) {
    line += '*';
    } else {
    line += ' ';
    }
    }
    console.log(line);
    }
    }
    printPattern(5);
    