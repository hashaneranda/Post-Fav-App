import React from 'react'

// components

import { Wrapper, TagsContainer } from './styles'

interface PostDescriptionProps {
  caption: string
  hashtags: string[]
}

const PostDescription: React.FC<PostDescriptionProps> = ({ caption, hashtags }) => (
  <Wrapper>
    <p>{caption}</p>
    <TagsContainer>
      {hashtags.map((hashtag: string, index: number) => (
        <h5 key={index}>{hashtag}</h5>
      ))}
    </TagsContainer>
  </Wrapper>
)

export default PostDescription
