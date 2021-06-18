import React from 'react'

// components
import LikeIcon from '~/common/components/Icons/LikeIcon'

import { Wrapper, DetailsContainer, LikesContainer } from './styles'

interface PostImageProps {
  images: string[]
  name: string
  price: string
  handleLike: (e: any) => void
  userLiked: boolean
}

const PostImage: React.FC<PostImageProps> = ({ images, name, price, handleLike, userLiked }) => (
  <Wrapper>
    <img src={images[0]} alt="postImage" className="post_image" />
    <DetailsContainer>
      <div>
        <p>{name}</p>
        <h3>{price}</h3>
      </div>
      <LikesContainer onClick={() => handleLike(true)}>
        <LikeIcon className={`like_icon ${userLiked ? 'liked_icon' : ''}`} />
      </LikesContainer>
    </DetailsContainer>
  </Wrapper>
)

export default PostImage
