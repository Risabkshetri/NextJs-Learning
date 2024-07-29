
function Card({cardTitle, cardDescription, cardImageUrl}) {
  return (
    <div className="bg-slate-300 h-auto w-auto py-4 px-4 my-4 rounded-md flex flex-col items-center justify-center">
        <img src="https://picsum.photos/200" alt="" />
        <div>
            <h1 className="font-bold text-2xl">{'Cart Title'}</h1>
            <p className="text-sm text-slate-50">{'Cart Description'}</p>
            <button className="bg-blue-500 text-white px-2 py-1 hover:bg-blue-600">{'read more'}</button>
        </div>
    </div>
  )
}

export default Card