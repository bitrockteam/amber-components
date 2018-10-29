
const fs = require('fs-extra');

const name = process.argv[2];
const dir = `./src/components/${name}`;
const files = [
  'index.ts',
  'style.scss'
];
const templates = [
  `./scripts/templates/${files[0]}`,
  `./scripts/templates/${files[1]}`
];

const findAll = search => new RegExp(search, 'g');

if(!name) {
  console.error('You must specify new component name!')
  process.exit(1);
}

fs.ensureDir(dir)
  .then(() => {
    console.log(`1. Created folder ${dir}...`);
  })
  .catch(err => {
    console.error(err)
  })

Promise.all(
  templates.map(e => fs.readFile(e, 'utf8'))
)
  .then(data => data.map(e => 
    e.replace(findAll('%%%'), name))
  )
  .then(data => data.map((e,i) => 
    fs.outputFile(`${dir}/${files[i]}`, data[i]))
  )
  .then(data => console.log(`2. Created starter files...`))
  .then(data => console.log(`3. Finished!`))