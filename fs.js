const fs = require('fs');
const fsPromises = fs.promises;
const fse = require('fs-extra');
const helpers = require('./helpers');

main();

async function main() {
  /**
   * 讀檔 fs.readFile(path [,options ])
   */
  const buffer = await fsPromises.readFile('./helpers.js'); // 回傳 buffer
  const text = await fsPromises.readFile('./helpers.js', 'utf-8'); // 回傳 utf-8 文字檔
  const fileStats = await fsPromises.stat('./helpers.js'); // 檢視檔案資訊

  /**
   * 寫檔 fs.writeFile(filename, data [,options])
   */
  await fsPromises.mkdir('./tmp', { recursive: true }); // 建立資料夾，先建立才可以在裡面新增檔案
  await fsPromises.writeFile('./tmp/newHelper.js', buffer); // 新增檔案

  await helpers.sleep(1500);

  /**
   * 刪檔
   */
  await fse.emptyDir('./tmp'); // 刪除資料夾
}
