import Image from "next/image"
import Link from "next/link"
import { Oswald } from "next/font/google"




export default async function MovieDetail({ params }) {
    
    const { movie } = params

    const imagePath= "https://image.tmdb.org/t/p/original"

    const data = await fetch
        (`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    
    const res = await data.json()
    console.log(res)
 



    return (
       
        <div className="h-full py-7" style={{ backgroundImage: `url(${imagePath + res.backdrop_path})` }}>
           
            <div className="container mx-auto cardcont">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 ">

                <div className="meta-data-container">
                    <h1>{res.original_title}</h1>

                    <span className="tagline">{res.tagline}</span>
                    <p>{res.overview}</p>
                    
                    <div className="additional-details">

                        <div className="grid md:grid-cols-2 sm:grid-cols-1 release-details w-full">
                            <div className=" py-2"> Original Release: <span className="meta-data">{res.release_date}</span></div>
                            <div className=" py-2"> Running Time: <span className="meta-data">{res.runtime} mins</span> </div>
                            <div className="py-2"> Box Office: <span className="meta-data">${res.revenue}</span></div>
                            <div className="py-2"> Vote Average: <span className="meta-data">{res.vote_average} / 10</span></div>
                        </div>
                    </div>
                </div>
                <div className="poster-container  ">
                    <img id="postertest" className='poster h-screen' src={imagePath + res.poster_path} />
                </div>
            </div>
            </div>
        

        </div>
        
    )
}
