import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/Layout'
import { getPostBySlug, getAllPosts } from '../../utils/api'
import markdownToHtml from '../../utils/markdownToHtml'


type Props = {
  post?: any
  errors?: string
}

const Post: React.FC<Props> = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout title="Post">
      {router.isFallback ? (
        <title>Loading…</title>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>
                {post.title}
              </title>
            </Head>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </>
      )}
    </Layout>    
  )
}

export default Post

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = String(params?.slug)
    const post = await getPostBySlug(slug)
    const content = await markdownToHtml(post.content || '')
    return { props: { post: {
      ...post,
      content,
    } }}
  } catch (err) {
    return { props: { errors: err.message } }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(posts => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
