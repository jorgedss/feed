import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import {Trash,ThumbsUp} from 'phosphor-react'

export function Comment({content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0)
    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        } );

        // serve para obter o valor mais recente, que acabou de alterado, do estado 

    }

    function handleDeleteComment (){
        onDeleteComment(content);
    }



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

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p> {content} </p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>  
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            
            </div>


        </div>
    )
}