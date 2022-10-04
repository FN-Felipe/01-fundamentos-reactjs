import { Post } from "./components/Post"
import { Header } from './components/Header';
import { Sidebar } from "./components/Sidebar";
import styles from './App.module.css';
import './global.css'

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/fn-felipe.png',
      name: 'Felipe de Assis',
      role: 'Web Developer',
    },
      content: [
        {type:'paragreph', content:'Fala galere'},
        {type:'paragreph', content:'Acabei de postar meu mais novo sucesso em desenvolvimento. É minha página pessoal. Lá vocês poderão são os dias de trabalho, meu contato e ficar por dentro de tudo o que eu faço no dia a dia.'},
        {type:'link',  content: 'felipe.developer/webdeveloper'}
    ],
    publishedAt: new Date('2022-10-01 10:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educatior @Rockeseat',
    },
      content: [
        {type:'paragreph', content:'Fala galere'},
        {type:'paragreph', content:'Acabei de postar meu mais novo sucesso em desenvolvimento. É minha página pessoal. Lá vocês poderão são os dias de trabalho, meu contato e ficar por dentro de tudo o que eu faço no dia a dia.'},
        {type:'link',  content: 'felipe.developer/webdeveloper'}
    ],
    publishedAt: new Date('2022-09-29 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {post.map(post => {
            return <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt}/>
          })}
        </main>
      </div>
    </div>
  )
}
