import type { NextPage } from 'next'
import styled from 'styled-components'

// components
import AppHead from '~/common/components/AppHead/AppHead'
import PostList from '~/common/components/PostList/PostList'
import Layout from '~/common/components/Layout/Layout'
import EmptyImage from '~/common/components/Icons/EmptyImage'

export const Container = styled.div`
  display: grid;
  place-items: center;
  min-height: 80vh;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
`

interface FavoritesProps {
  posts: any[]
}

const Favorites: NextPage<FavoritesProps> = ({ posts }) => (
  <Layout>
    <AppHead title="Favorites" />
    <h1>Favorites</h1>
    {!!posts && posts.length > 0 ? (
      <PostList posts={posts} />
    ) : (
      <Container>
        <Wrapper>
          <EmptyImage />
          <h3>No favorites added!</h3>
        </Wrapper>
      </Container>
    )}
  </Layout>
)

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_SERVER_BASE}/v1/post/fav`)
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default Favorites
