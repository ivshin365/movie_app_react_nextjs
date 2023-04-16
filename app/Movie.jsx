import Link from "next/link"

export default function Movie({title, id, poster_path, release_date}) {
    const imagePath= "https://image.tmdb.org/t/p/original"
    return (
        <div>
            <div className=" py-1 font-semibold text-2xl">
            <h1>{title}</h1>
            </div>
            <div>
            <h2>{release_date}</h2>
            </div>
            <div className="py-2">
            <Link href={`/${id}`}>
                <img src={imagePath + poster_path} alt="" width={400} height={400} />
            </Link>
            </div>
        </div>
    )

}