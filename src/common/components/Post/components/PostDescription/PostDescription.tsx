import React from 'react'

// components
import LikeIcon from '~/common/components/Icons/LikeIcon'

import { Wrapper, TagsContainer, LikesContainer } from './styles'

interface PostDescriptionProps {
  caption: string
  hashtags: string[]
  likesCount: number
}

const PostDescription: React.FC<PostDescriptionProps> = ({ caption, hashtags, likesCount }) => (
  <Wrapper>
    <LikesContainer>
      <LikeIcon className="like_icon" />
      <h4>{likesCount} likes</h4>
    </LikesContainer>

    <p>{caption}</p>
    <TagsContainer>
      {hashtags.map((hashtag: string, index: number) => (
        <h5 key={index}>{hashtag}</h5>
      ))}
    </TagsContainer>
  </Wrapper>
)

export default PostDescription
