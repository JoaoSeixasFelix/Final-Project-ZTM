import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from './homepage'

const Home: NextPage = () => {
  return (
    <div className='w-full h-full'>
     <HomePage/>
    </div>
  )
}

export default Home
