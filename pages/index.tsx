import type { NextPage } from 'next'

// components
import AppHead from '~/common/components/AppHead/AppHead'
import PostList from '~/common/components/PostList/PostList'
import Layout from '~/common/components/Layout/Layout'

const posts = [
  {
    hashtags: ['#photo', '#react', '#nextjs'],
    caption:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    comments: [{ username: 'tessa', comment: 'Nice pic!' }],
    created_time: '',
    id: '121312dadawdawd1212',
    images: ['https://images.freeimages.com/images/small-previews/f71/keyboard-series-5-1241875.jpg'],
    likesCount: 20,
    tags: [null],
    price: 'AED:56.00',
    type: 'image',
    user: {
      username: 'jhonedoe',
      name: 'Jhon Doe',
      image: 'https://i.ibb.co/p3n8jKV/88129994-218553312873090-187843388282765312-n.jpg',
    },
    user_has_liked: true,
  },
  {
    hashtags: ['#photo', '#react', '#nextjs'],
    caption:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    comments: [{ username: 'tessa', comment: 'Nice pic!' }],
    created_time: '',
    id: '121312dadawdawd1212',
    images: ['https://images.freeimages.com/images/small-previews/f71/keyboard-series-5-1241875.jpg'],
    likesCount: 20,
    tags: [null],
    price: 'AED:56.00',
    type: 'image',
    user: {
      username: 'jhonedoe',
      name: 'Jhon Doe',
      image: 'https://i.ibb.co/p3n8jKV/88129994-218553312873090-187843388282765312-n.jpg',
    },
    user_has_liked: true,
  },
  {
    hashtags: ['#photo', '#react', '#nextjs'],
    caption:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    comments: [{ username: 'tessa', comment: 'Nice pic!' }],
    created_time: '',
    id: '121312dadawdawd1212',
    images: ['https://images.freeimages.com/images/small-previews/f71/keyboard-series-5-1241875.jpg'],
    likesCount: 20,
    tags: [null],
    price: 'AED:56.00',
    type: 'image',
    user: {
      username: 'jhonedoe',
      name: 'Jhon Doe',
      image: 'https://i.ibb.co/p3n8jKV/88129994-218553312873090-187843388282765312-n.jpg',
    },
    user_has_liked: true,
  },
]

const Index: NextPage = () => (
  <Layout>
    <AppHead title="Home" />
    <PostList posts={posts} />
  </Layout>
)

export default Index
