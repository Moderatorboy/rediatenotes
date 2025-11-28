// generateData.js
const fs = require('fs');
const path = require('path');

const baseDir = './pdfs/skmsir11notes';
let data = [];

const classes = ['SKM Sir']; // example

classes.forEach(cls => {
    const clsPath = path.join(baseDir, cls.toLowerCase().replace(/\s/g,''));
    const chapters = fs.readdirSync(baseDir); // boc, goc, etc
    let chapterArray = chapters.map(chap => {
        const files = fs.readdirSync(path.join(baseDir, chap)).filter(f => f.endsWith('.pdf'));
        const lectures = files.map(file => ({
            title: path.basename(file, '.pdf'),
            pdf: `pdfs/skmsir11notes/${chap}/${file}`
        }));
        return {
            name: chap,
            lectures
        };
    });
    data.push({
        class: '12th',
        subjects: [
            {
                name: cls,
                chapters: chapterArray
            }
        ]
    });
});

fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
console.log('data.json generated!');
