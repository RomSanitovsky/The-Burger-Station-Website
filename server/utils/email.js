const nodemailer = require('nodemailer');

const sendEmail =  async (options)=> {
    // 1) Create a transporter
    const transporter = nodemailer.createTransport({
        host:process.env.EMAIL_HOST,
        port:process.env.EMAIL_PORT, 
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        },
        
    }); 
    // 2) Define the email options
    const mailOptions = {
        from: 'Rom Sanitovsky <romrom306@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: options.message

    };


    // 3) Actually send the email
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
/*

const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);const footer = `Don't like this message?
There's a Github Sponsors goal to remove it
https://github.com/sponsors/andris9
`;

const secs = 4;

const formatCentered = (row, columns) => {
    return row
        .split(/\r?\n/)
        .map(row => {
            if (columns <= row.length) {
                return row;
            }

            return ' '.repeat(Math.round(columns / 2 - row.length / 2)) + row;
        })
        .join('\n');
};

const formatRow = (row, columns) => {
    if (row.length <= columns) {
        return [row];
    }
    // wrap!
    let lines = [];
    while (row.length) {
        if (row.length <= columns) {
            lines.push(row);
            break;
        }
        let slice = row.substr(0, columns);

        let prefix = slice.charAt(0) === '>' ? '  ' : '';

        let match = slice.match(/(\s+)[^\s]*$/);
        if (match && match.index) {
            let line = row.substr(0, match.index);
            row = prefix + row.substr(line.length + match[1].length);
            lines.push(line);
        } else {
            lines.push(row);
            break;
        }
    }
    return lines;
};

const wrapText = text => {
    let columns = Number(process.stdout.columns) || 80;
    columns = Math.min(columns, 80) - 1;

    return (
        (formatCentered(title, columns) + '\n' + text)
            .split('\n')
            .flatMap(row => formatRow(row, columns))
            .join('\n') +
        '\n' +
        formatCentered(footer, columns)
    );
};

const banner = wrapText(text)
    .replace(/^/gm, '\u001B[96m')
    .replace(/$/gm, '\u001B[0m')
    .replace(/(https:[^\s)]+)/g, '\u001B[94m $1 \u001B[96m');

console.log(canUseColor ? banner : banner.replace(/\u001B\[\d+m/g, ''));
if (canUseColor) {
    process.stdout.write('\u001B[96m');
}

setInterval(() => {
    process.stdout.write('.');
}, 500);

setTimeout(() => {
    if (canUseColor) {
        process.stdout.write('\u001B[0m\n');
    }
    process.exit(0);
}, secs * 1000 + 100);
*/