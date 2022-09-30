import styles from './Header.module.css'; // para importar o molude do css preciso criar uma "variável" para ela
import igniteLogo from '../assets/ignite-Logo.svg'
export function Header(){
    return (
        <header className={styles.header}> 
            <img src={igniteLogo} alt="Logotipo do Ignite" />
            <strong>Ignite Feed</strong>
        </header> // para o React não confundir, ele muda o nome class para classname. É a mesma coisa. Para passar uma variável do JS no HTML preciso pôr em chaves {} e acesso as propriedades do css ex. styles.header
    )
}