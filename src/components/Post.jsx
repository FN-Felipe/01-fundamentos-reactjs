import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({author, publishedAt, content}){
    const [comments, setComments] = useState([
        'Muito bom esse post',
    ])

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'de' yyyy 'às' HH:mm'h'", {
        locale: ptBr,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    })

    

    function handleCreateNewComment(){
        event.preventDefault()

        const newCommentText = event.target.comment.value

        setComments([...comments, newCommentText]);
    } 

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            
            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragreph'){
                        return <p>{line.content}</p>
                    } else if (line.type === 'link'){
                        return <p><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>
            
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário'/>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment content={comment}/>
                })}
            </div>

        </article>
    )
}