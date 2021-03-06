
const fs: any = require('fs-extra');

const param: string = process.argv[2];
const dir: string = `./src/components/${param}`;
const files: Array<string> = [
  'index.ts',
  'style.scss'
];
const templates: Array<string> = [
  `./scripts/templates/${files[0]}`,
  `./scripts/templates/${files[1]}`
];
const storyTmpls :Array<string> = [
  `./scripts/templates/story.ts`
];
const story :Array<string> = [
  `./.storybook/stories/${param}.ts`
];

const findAll = (search: string): RegExp => new RegExp(search, 'g');

// Check if required parameter is provided
if(!param) {
  console.error('You must specify new component name!')
  process.exit(1);
}

// Create folder for component code
fs.ensureDir(dir)
  .then((): void => {
    console.log(`1. Created folder ${dir}...`);
  })
  .catch((err: Error): void => {
    console.error(err);
  })

// Create files for component code
Promise.all(
  templates.map((e: string): any => fs.readFile(e, 'utf8'))
)
  .then((data: Array<string>): Array<string> => 
    data.map((e: string): string => e.replace(findAll('%%%'), param))
  )
  .then((data: Array<string>): Array<string> => 
    data.map((e: string,i: number): any => 
      fs.outputFile(`${dir}/${files[i]}`, data[i]))
  )
  .then((data: Array<string>): void => 
    console.log(`2. Created starter files...`)
  );

// Create files for Storybook
Promise.all(
  storyTmpls.map((e: string): any => fs.readFile(e, 'utf8'))
)
  .then((data: Array<string>): Array<string> =>
    data.map((e: string): string => e.replace(findAll('%%%'), param))
  )
  .then((data: Array<string>): Array<string> =>
    data.map((e: string, i: number): any =>
      fs.outputFile(story[i], data[i]))
  )
  .then((data: Array<string>): void =>
    console.log(`3. Created Storybook files...`)
  );