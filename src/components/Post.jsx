import { format , formatDistanceToNow} from 'date-fns'
import { Comment } from './Comment';
import styles from './Post.module.css';
import { Avatar } from './Avatar';
import { ptBR } from 'date-fns/locale';

export function Post({ author, publishedAt}) {
    const publishedDateFormatted = format(new Date(publishedAt), "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true,
    })
    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} alt="" />
                    <div className={styles.authorInfo}>
                        <strong >{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
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
