import {Post} from "./components/Post"
import { Header } from "./components/Header"

import "./global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"
//import { type } from "os"



const posts = [
  {
    id:1,
    author:{
      avatarUrl: "http://github.com/jorgedss.png",
      name: "Jorge",
      role: "Dev FrontEnd"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content:   'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-04-15 20:00:00'),
  },
  {
    id:2,
    author:{
      avatarUrl: "http://github.com/jorgedss.png",
      name: "José",
      role: "Dev BackEnd"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content:   'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-04-18 11:25:00'),
  }
];


export function App() {
  return (
    <div>
      <Header/>
     <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
            return (
            <Post 
            key={post.id}
            author = {post.author}
            content = {post.content}
            publishedAt = {post.publishedAt}
            />
          )
          })}

        </main>
        </div>
    </div>
  )
}

