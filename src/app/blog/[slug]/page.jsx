import React, { Suspense } from 'react'
import styles from './singlePostPage.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/postUser'
import { getPost } from "@/lib/data";


export const generatedMetadata = async ({params})=>{
  console.log(params)
  const {slug} = params;
  
  const post = await getPost(slug);

  return{
    title: post.title,
    description: post.desc
  }
 
}

// FETCH DATA WITH AN API
const getData = async (slug) =>{
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if(!res.ok){  
    throw new Error("Something went wrong!")
  }
  return res.json()
};



const SinglePostPage = async ({params}) => {

  const {slug} = params;
  
  //FETCH DATA WITH AN API 
  const post = await getData(slug)


  //FETCH DATA WITHOUT AN API 
  // const post = await getPost(slug)
  

  

  return (
 
    <div className={styles.container}>
       {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.detail}>
      
    {post && (
      <Suspense fallback={<div>Loading...</div>}>
      <PostUser userId={post.userId} />
      </Suspense>
    )}
        <div className={styles.detailText}>
        <span className={styles.detailTitle}>Published</span>
        <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
        </div>
      </div>
        <div className={styles.content}>{post.desc}</div>
        {console.log(post.desc)}
    </div>
    </div>

    
  )
}

export default SinglePostPage                   