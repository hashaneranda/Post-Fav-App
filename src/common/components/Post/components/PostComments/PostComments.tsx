import React from 'react'

// components

import { Wrapper } from './styles'

interface PostCommentProps {
  comments: any[]
}

const renderCommentCount = (count: number) => {
  let text = 'No comments'

  if (count > 0) {
    if (count === 1) text = 'View all 1 comment'
    else text = `View all ${count} comments`
  }

  return text
}

const PostComment: React.FC<PostCommentProps> = ({ comments }) => (
  <Wrapper>
    <h4>{renderCommentCount(comments.length)}</h4>
  </Wrapper>
)

export default PostComment
