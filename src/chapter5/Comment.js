import styles from "./Comment.module.css"

function Comment(props) {
  return (
    <div className={styles.wrapper}>
      <div>
        <img
          className={styles.image}
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        />
      </div>

      <div className={styles.contentContainer}>
        <span className={styles.nameText}>{props.name}</span>
        <span className={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  )
}

export default Comment