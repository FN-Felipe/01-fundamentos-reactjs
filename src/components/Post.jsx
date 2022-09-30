import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/fn-felipe.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Felipe de Assis</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de maio de 2022' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
            </header>
            
            <div className={styles.content}>
                <p>Fala galere</p>
                <p>Acabei de postar meu mais novo sucesso em desenvolvimento. É minha página pessoal. Lá vocês poderão são os dias de trabalho, meu contato e ficar por dentro de tudo o que eu faço no dia a dia.</p>
                <p><a href="">felipe.developer/webdeveloper</a></p>
                <p>
                    <a href="">#webdeveloper</a>{' '}
                    <a href="">#programaçãoPorAmor</a>
                </p>
            </div>
            
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário'/>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>

        </article>
    )
}