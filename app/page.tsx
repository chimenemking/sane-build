
import Head from 'next/head'
import Header from './components/Header'
import { sanityClient, urlFor } from '../sanity';
import { Post } from '@/typings';

interface Props{
  posts:[Post];
}

export default function Home({posts}: Props) {
  console.log(posts);
  return (
    <>
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
      
      </Head>
      <Header
      />
      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif"> <span className="underline decoration-blackdecoraion-4">Medium</span>{""} is a place to write, read and connect</h1>
          <h2>It's easy and free to post your thinking on any topic and connect with attention of readers </h2>
        </div>
        <img className="hidden md:inline-flex h-32 lg:h-full" src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="" />
      </div>
    {/* Posts */}
    
    </div>
    </>
  )
}

export const getServerSideProps = async ()=>{
  const query = `*[_type == "post"]{
  _id,
  title,
  author -> {
    name,
    image
  },
  description,
  mainImage,
  slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props:{
      posts,
    }
  }
};