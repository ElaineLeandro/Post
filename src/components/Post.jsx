import {format} from 'date-fns'
import { Comment } from './Comment';
import styles from './Post.module.css';
import { Avatar } from './Avatar';
import { ptBR } from 'date-fns/locale';

export function Post ({ author, publishedAt }) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm 'h'",{
        locale: ptBR,
    })
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  src={author.avatarUrl} alt="" />
                    <div className={styles.authorInfo}>
                        <strong >{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title='' dateTime="2022-07-22 17:55:00"> { publishedDateFormatted}</time>
            </header>

            <div className={styles.content}>
                
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentario</strong>

                <textarea 
                    placeholder='Deixe seu comentario aqui'
                />
                
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
} 
