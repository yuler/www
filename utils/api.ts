import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), '_posts')
const POST_DEFAULT_FIELDS = ['slug', 'title', 'content']

export function getPostSlugs() {
  return fs.readdirSync(POSTS_DIR)
}

export function getPostBySlug(slug: string, fields: string[] = POST_DEFAULT_FIELDS) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(POSTS_DIR, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: any = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = POST_DEFAULT_FIELDS) {
  const slugs = getPostSlugs()
  return slugs.map(slug => getPostBySlug(slug, fields))
}