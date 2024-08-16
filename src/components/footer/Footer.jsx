import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Lamadev</div>
      <div className={styles.text}>
        Lama Creative Thoughts Agency  ©  All rights reserved.
      </div>
    </div>
  )
}

export default Footer