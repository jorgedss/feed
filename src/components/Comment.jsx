import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import {Trash,ThumbsUp} from 'phosphor-react'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/jorgedss.png" alt="" />

            <div className={styles.commentBox}> 
                <div className={styles.commentContent}>
                    <header> 
                        <div className={styles.authorAndTime}> 
                            <strong> Jorge </strong>
                            <time title='08/04/2024' dateTime='2024-04-08'> Cerca de 1h atrás </time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>  Muito bom!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            
            </div>


        </div>
    )
}