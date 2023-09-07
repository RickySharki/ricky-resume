import path from 'path'
import { fileURLToPath } from 'url'
import AdmZip from 'adm-zip'

const htmlVersionName = 'html'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const folderPath = path.resolve(__dirname, '../dist')
const writeFolder = path.resolve(
  __dirname,
  `../packages/${htmlVersionName}.zip`,
)

const zip = new AdmZip()
zip.addLocalFolder(path.resolve(folderPath))
zip.writeZip(writeFolder)
