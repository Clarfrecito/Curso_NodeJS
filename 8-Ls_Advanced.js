const fs = require('node:fs/promises')
const path = require('node:path')
const picocolors = require('picocolors')
const folder = process.argv[2] ?? '.'
async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch (err) {
    console.error(picocolors.red(`Error reading directory: ${folder}`))
    process.exit(1)
  }
  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath)
    } catch {
      console.error(picocolors.red(`Error reading file: ${filePath}`))
      process.exit(1)
    }
    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'D:' : 'F:'
    const fileSize = stats.size.toString()
    const filemodified = stats.mtime.toLocaleString()
    return `${fileType} ${picocolors.blue(file.padEnd(40))} ${picocolors.green(fileSize.padStart(10))} ${picocolors.yellow(filemodified)}`
  })
  const filesInfo = await Promise.all(filesPromises)
  filesInfo.forEach(fileInfo => {
    console.log(fileInfo)
  })
}
ls(folder)
