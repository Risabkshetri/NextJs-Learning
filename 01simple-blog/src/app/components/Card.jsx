function Card({cardTitle, cardDescription, cardImageUrl}) {
  return (
    <div className="bg-slate-300 h-auto w-auto py-4 px-4  rounded-md flex flex-col items-center justify-center">
        <img className="h-40 w-full" src = {cardImageUrl} alt={cardTitle} />
        <div className="flex flex-col gap-2">
            <h1 className="font-bold text-2xl text-black">{cardTitle}</h1>
            <p className="text-sm text-black">{cardDescription}</p>
            <button className="bg-blue-500 text-white px-2 py-1 hover:bg-blue-600">{'read more'}</button>
        </div>
    </div>
  )
}

export default Card