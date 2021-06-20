import { useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

// components
import AppHead from '~/common/components/AppHead/AppHead'
import PostList from '~/common/components/PostList/PostList'
import Layout from '~/common/components/Layout/Layout'

// config
import { API_SERVER_BASE } from '~/config/constants'

interface IndexProps {
  posts: any[]
}

const Index: NextPage<IndexProps> = ({ posts }) => {
  const router = useRouter()

  const refreshData = () => {
    router.replace(router.asPath)
  }

  useEffect(() => {
    refreshData()
  }, [])

  return (
    <Layout>
      <AppHead title="Home" />
      <PostList posts={posts} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_SERVER_BASE}/v1/post`)
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default Index
