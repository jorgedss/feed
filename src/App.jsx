import {Post} from "./Post"
import { Header } from "./componets/Header"

import "./global.css"

export function App() {
  return (
    <div>
      <Header/>
      <Post
        author = "Jorge"
        content = "Três ratos cegos"
      />
      <Post
      author = "José"
      content = "Três gatos famintos"
      />

    </div>
  )
}

