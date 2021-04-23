import Router from 'next/router'
import {MainLayout} from "../../components/MainLayout";

export default function About() {

  const linkClickHandler = () => {
    Router.push('/')
  }

  return (
    <MainLayout title={'About Page'}>
      <h1>About Page</h1>

      <button onClick={linkClickHandler}>Go back to Posts</button>
      <button onClick={() => Router.push('/posts')}>Go back to Posts</button>
    </MainLayout>
  )
}