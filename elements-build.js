const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = ['./dist/elements.js'];
  await fs.ensureDir('widget-demo');
  await concat(files, 'widget-demo/widget-demo-element.js');
})();
