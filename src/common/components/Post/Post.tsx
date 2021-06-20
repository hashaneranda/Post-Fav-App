import React, { useState } from 'react'

// components
import PostHeader from './components/PostHeader/PostHeader'
import PostImage from './components/PostImage/PostImage'
import PostDescription from './components/PostDescription/PostDescription'
import PostComments from './components/PostComments/PostComments'

// config
import { API_SERVER_BASE } from '~/config/constants'

import { Card } from './styles'

interface PostProps {
  post: any
  isFavoriteList: boolean
}

const Post: React.FC<PostProps> = ({ post, isFavoriteList }) => {
  const [data, setData] = useState(post)

  const applyLike = async () => {
    const objectWithData = {
      post: post._id,
    }

    if (isFavoriteList) setData(null)
    else
      setData({
        ...data,
        user_has_liked: true,
      })

    try {
      await fetch(`${API_SERVER_BASE}/v1/post/fav`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(objectWithData),
      })
    } catch (error) {
      if (isFavoriteList) setData(post)
      else
        setData({
          ...data,
          user_has_liked: false,
        })
    }
  }

  if (!data) return <></>

  return (
    <Card>
      <PostHeader username={data.user?.username} userImage={data.user?.image} />
      <PostImage
        images={data.images}
        name={data.name}
        price={data.price}
        userLiked={data.user_has_liked}
        handleLike={() => applyLike()}
      />
      <PostDescription caption={data.caption} hashtags={data.hashtags} likesCount={data.likesCount} />
      <PostComments comments={data.comments} />
    </Card>
  )
}

export default Post
