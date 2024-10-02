

export default function Book({ book }) {
    return <>
        <li className="w-2/5 lg:w-[calc(100%/3-20px)] max-w-xs max-h-94 relative shadow-xl rounded-2xl bg-slate-800">
            <i class="fa-solid fa-check p-2 absolute top-2 right-2 z-50 text-orange-600 shadow rounded-full hover:bg-slate-300 hover:scale-125"></i>
            <img src="bookshelf.png" alt="bookshelf placeholder" className="max-w-full rounded-t-2xl" />

            <div className="px-4 py-3">
                <h5 className="text-white leading-4">{book.title}</h5>
                <p>
                    <span className="text-slate-400 text-sm">by </span>
                    <span className="text-orange-600 font-semibold">{book.author}</span>
                </p>
            </div>
        </li>
    </>
}