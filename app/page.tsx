import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Movie from "./Movie"
import { Key } from 'react'

const inter = Inter({ subsets: ['latin'] })
 
export default async function Home() {

  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)

  const res = await data.json()

  return (
    <main>
    <div className="grid gap-16 lg:grid-cols-4 md:grid-cols-3 py-3 mx-8">
    {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
    ))
    }
  </div>
    </main>
  )
}
