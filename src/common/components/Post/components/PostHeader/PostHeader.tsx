import React from 'react'
import Image from 'next/image'
// components

import { Header } from './styles'

interface PostHeaderProps {
  username: string
  userImage: string
}

const PostHeader: React.FC<PostHeaderProps> = ({ username, userImage }) => (
  <Header>
    <img src={userImage} alt="user" />
    <p>{username}</p>
  </Header>
)

export default PostHeader
