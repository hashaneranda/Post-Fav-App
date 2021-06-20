import { useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'

// components
import AppHead from '~/common/components/AppHead/AppHead'
import PostList from '~/common/components/PostList/PostList'
import Layout from '~/common/components/Layout/Layout'
import EmptyImage from '~/common/components/Icons/EmptyImage'

// config
import { API_SERVER_BASE } from '~/config/constants'

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

const Favorites: NextPage<FavoritesProps> = ({ posts }) => {
  const router = useRouter()

  const refreshData = () => {
    router.replace(router.asPath)
  }

  useEffect(() => {
    refreshData()
  }, [])

  return (
    <Layout>
      <AppHead title="Favorites" />
      {!!posts && posts.length > 0 ? (
        <PostList posts={posts} postName="post" title="Favorites" isFavoriteList={true} />
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
}

export async function getServerSideProps() {
  const res = await fetch(`${API_SERVER_BASE}/v1/post/fav`)
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default Favorites
