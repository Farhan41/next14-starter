import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'



const PostCard = ({post}) => {
  console.log(post.slug)
  
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            {post.img && <div className={styles.imgContainer}>
                <Image className={styles.img} src={post.img} alt='' fill/>
            </div>}
            <span className={styles.date}>01.01.24</span>
        </div>
        <div className={styles.bottom}>
            <div className={styles.title}>{post.title}</div>
            <p className={styles.desc}>{post.body}</p>
        </div>
        <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
    </div>
  )
}

export default PostCard

