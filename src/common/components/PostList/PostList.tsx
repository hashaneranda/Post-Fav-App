import React from 'react'

// components
import Post from '~/common/components/Post/Post'

import { Section } from './styles'

interface PostListProps {
  posts: any[]
  title?: string
  postName?: string
  isFavoriteList?: boolean
}

const PostList: React.FC<PostListProps> = ({ posts, postName, title, isFavoriteList }) => (
  <Section>
    {!!title && <h3>{title}</h3>}
    {posts.map((post: any, index: number) => (
      <Post key={index} post={postName ? post[postName] : post} isFavoriteList={!!isFavoriteList} />
    ))}
  </Section>
)

PostList.defaultProps = {
  postName: '',
  isFavoriteList: false,
}

export default PostList
