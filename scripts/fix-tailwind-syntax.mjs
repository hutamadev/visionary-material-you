import fs from 'node:fs'
import path from 'node:path'

const TARGET_DIR = path.resolve(process.cwd(), 'src')
const EXTENSIONS = new Set(['.tsx', '.ts', '.jsx', '.js', '.html', '.css'])

function getFiles(dir) {
  let files = []
  const items = fs.readdirSync(dir, { withFileTypes: true })
  for (const item of items) {
    const fullPath = path.join(dir, item.name)
    if (item.isDirectory()) {
      if (
        !['node_modules', '.git', 'dist', 'build', '.next'].includes(item.name)
      ) {
        files = files.concat(getFiles(fullPath))
      }
    } else if (EXTENSIONS.has(path.extname(item.name))) {
      files.push(fullPath)
    }
  }
  return files
}

function fixTailwindSyntax(content) {
  // Replace Tailwind CSS arbitrary var syntax [var(--my-var)] with Tailwind v4 shorthand (--my-var)
  return content.replace(/\[var\((--[a-zA-Z0-9_-]+)\)\]/g, '($1)')
}

function run() {
  const files = getFiles(TARGET_DIR)
  let totalFixed = 0
  let filesChanged = 0

  for (const file of files) {
    const original = fs.readFileSync(file, 'utf8')
    const matches = original.match(/\[var\((--[a-zA-Z0-9_-]+)\)\]/g)
    if (matches && matches.length > 0) {
      const fixed = fixTailwindSyntax(original)
      fs.writeFileSync(file, fixed, 'utf8')
      filesChanged++
      totalFixed += matches.length
      console.log(
        `✓ Fixed ${matches.length} instance(s) in: ${path.relative(process.cwd(), file)}`
      )
    }
  }

  console.log(
    `\n🎉 Completed! Fixed ${totalFixed} Tailwind CSS variable syntax warning(s) across ${filesChanged} file(s).`
  )
}

run()
