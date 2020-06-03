import React from 'react'
import Layout from '../../components/Layout'
import { getAllPosts } from '../../utils/api'

export default function Posts({ posts }: { posts: any}) {
  return (
    <Layout title="posts">
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>{post.title}</li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ])

  return {
    props: { posts },
  }
}
