import React from 'react'

// components
import PostHeader from './components/PostHeader/PostHeader'
import PostImage from './components/PostImage/PostImage'
import PostDescription from './components/PostDescription/PostDescription'
import PostComments from './components/PostComments/PostComments'

import { Card } from './styles'

interface PostProps {
  post: any
}

const Post: React.FC<PostProps> = ({ post }) => (
  <Card>
    <PostHeader username={post.user?.username} userImage={post.user?.image} />
    <PostImage
      images={post.images}
      name={post.name}
      price={post.price}
      userLiked={post.user_has_liked}
      handleLike={() => console.log('liked')}
    />
    <PostDescription caption={post.caption} hashtags={post.hashtags} likesCount={post.likesCount} />
    <PostComments comments={post.comments} />
  </Card>
)

export default Post
