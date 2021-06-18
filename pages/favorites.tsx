import type { NextPage } from 'next'

// components
import AppHead from '~/common/components/AppHead/AppHead'
// import PostList from '~/common/components/PostList/PostList'
import Layout from '~/common/components/Layout/Layout'

const Index: NextPage = () => (
  <Layout>
    <AppHead title="Favorites" />
    <h1>Favorites</h1>
  </Layout>
)

export default Index
