const fs = require('fs');
const http = require('http');
const https = require('https');
const { URL } = require('url');

// Function to perform a GET request and save HTML content to a file
function saveHtml(url, filename) {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, (res) => {
        let html = '';
        res.on('data', (chunk) => {
            html += chunk;
        });
        res.on('end', () => {
            fs.writeFile(filename, html, (err) => {
                if (err) {
                    console.error(`Error writing to ${filename}: ${err.message}`);
                } else {
                    console.log(`Wrote to ${filename}`);
                }
            });
        });
    }).on('error', (err) => {
        console.error(`Couldn't download ${url}: ${err.message}`);
    });
}

// Function to extract hostname from URL
function getHostname(url) {
    return new URL(url).hostname;
}

// Main function
function main() {
    const filename = process.argv[2];
    if (!filename) {
        console.error('Please provide a filename.');
        process.exit(1);
    }

    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file ${filename}: ${err.message}`);
            process.exit(1);
        }

        const urls = data.split('\n').filter(url => url.trim() !== '');
        urls.forEach(url => {
            const hostname = getHostname(url);
            const outputFilename = `${hostname}.html`;
            saveHtml(url, outputFilename);
        });
    });
}

// Run the main function
main();