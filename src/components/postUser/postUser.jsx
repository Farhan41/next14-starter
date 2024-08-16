import React from 'react'
import styles from './postUser.module.css'

import { getUser } from "@/lib/data";
import Image from 'next/image';




const PostUser = async ({ userId }) => {
     
    const user = await getUser(userId);   
    console.log("ok",user)    
    console.log(user.username)            
    console.log(user.img)            
  return (
    <div className={styles.container}>
      <Image className={styles.avatar} src={user.img? user.img : "/avatar.png"} alt=''  width={50} height={50}/>
          <div className={styles.texts}>
          <span className={styles.title}>Farhan</span>
          <span className={styles.username}>{user.username}</span>
          </div>
    </div>
  )
}

export default PostUser



// DB_USER_NAME=ecom
// DB_PASSWORD=9ugh9TcU1cMzLTTF
// DB_NAME=ecommerce