import React from 'react'

// components
import Post from '~/common/components/Post/Post'

import { Section } from './styles'

interface PostListProps {
  posts: any[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => (
  <Section p={4}>
    {posts.map((post: any, index: number) => (
      <Post key={index} post={post} />
    ))}
  </Section>
)

export default PostList
