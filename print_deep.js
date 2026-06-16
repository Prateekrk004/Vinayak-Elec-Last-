import fs from 'node:fs';

const deep = JSON.parse(fs.readFileSync('deep_crawled_structure.json', 'utf8'));

Object.keys(deep).forEach(cat => {
  console.log(`\n================================`);
  console.log(`CATEGORY: ${cat} (Total items: ${deep[cat].length})`);
  console.log(`================================`);
  
  // Sample a few items
  const items = deep[cat];
  const folders = items.filter(i => i.isFolder);
  const files = items.filter(i => !i.isFolder);
  
  console.log(`Folders found: ${folders.length}, Files found: ${files.length}`);
  
  // Let's print the first 15 files/folders
  items.slice(0, 15).forEach((item, idx) => {
    console.log(`  [${item.isFolder ? 'Folder' : 'File'}] ${item.name} (${item.subcategory || 'Direct'}) - ID: ${item.id}`);
  });
  if (items.length > 15) {
    console.log(`  ... and ${items.length - 15} more items`);
  }
});
