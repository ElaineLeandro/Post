import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment () {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/thiagoss1.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
            <strong>Thiago</strong>
              <time title='22 de julho às 17:55' dateTime="2022-07-22 17:55:00">Cerca de 1h atras</time>
            </div>

            <button title='Deletar comentario'>
              <Trash size={24} />
            </button>
          </header>

          <p >Muito bom Devon, parabéns !!</p>
        </div>


        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div >
    </div >
      )
}     