import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [cards, setCards] = useState([])

  // the below function fetches data from an API
  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="container">
        {cards.map((card) => {
          return (
            <div key={card.id} className="card">
              <h1>{card.title}</h1>
              <p>{card.body}</p>
              <span>By : userID : {card.userId} </span>
            </div>
          )
        })}
      </div>
    </>
  )
}
