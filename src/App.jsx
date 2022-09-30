import { Post } from "./components/Post"
import { Header } from './components/Header';
import { Sidebar } from "./components/Sidebar";
import styles from './App.module.css';
import './global.css'

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author='Felipe' 
            content='Eu sou bonito'
          />
          <Post 
            author='Nayara' 
            content='Ela é muito legal'
          />
        </main>
      </div>
    </div>
  )
}
