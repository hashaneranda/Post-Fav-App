import React from 'react'

// components

import { Card } from './styles'

interface PostProps {
  post: any
}

const Post: React.FC<PostProps> = ({ post }) => (
  <Card p={1}>
    <h1>Post list</h1>
    <p>{JSON.stringify(post)}</p>
  </Card>
)

export default Post
