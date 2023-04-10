import React from 'react'
import styles from './Posts.module.css'

export default function Post({ title, body, onClick, post, isFavoritePost, handleClick, toggleFavoritePost, id }) {
  return (
	<div className={styles.item}>
      <div className={styles.favorites} id={id} onClick={(e) => {
        toggleFavoritePost(e.target.id)
      }}>{isFavoritePost(id) ? 'Удалить из избранного' : 'Добавить в избранное'}</div>
      <div className={styles.title}>{title}</div>
      <div>{body}</div>
  </div>
  )
}
