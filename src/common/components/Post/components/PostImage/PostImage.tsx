import React from 'react'

// components

import { Wrapper, DetailsContainer } from './styles'

interface PostImageProps {
  images: string[]
  name: string
  price: string
  handleLike: (e: any) => void
}

const PostImage: React.FC<PostImageProps> = ({ images, name, price, handleLike }) => (
  <Wrapper>
    <img src={images[0]} alt="postImage" className="post_image" />
    <DetailsContainer>
      <div>
        <p>{name}</p>
        <h3>{price}</h3>
      </div>
      <p>btn</p>
    </DetailsContainer>
  </Wrapper>
)

export default PostImage
