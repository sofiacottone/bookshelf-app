import { useState } from "react"

export default function Book({ book, onRemoveBook, onToggleBook, onEditBook }) {
    const [showActions, setShowActions] = useState(false);

    // actions toggle
    function handleShowActions() {
        setShowActions((show) => !show)
    }

    return <>
        <li className="sm:w-2/5 lg:w-[calc(100%/3-20px)] max-w-xs max-h-94 relative shadow-xl rounded-2xl bg-slate-800">

            {/* status check */}
            <div className="inline-flex items-center absolute top-4 right-4">
                <label className="flex items-center cursor-pointer relative">
                    <input
                        type="checkbox"
                        value={book.status}
                        onChange={() => onToggleBook(book.id)}
                        className="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-full bg-transparent hover:bg-slate-800 shadow-md shadow-slate-700 checked:bg-slate-800"
                    />
                    <span className="absolute text-orange-600 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <i className="fa-solid fa-check h-3.5 w-3.5"></i>
                    </span>
                </label>
            </div>

            <img src="bookshelf.png" alt="bookshelf placeholder" className="max-w-full rounded-t-2xl" />

            <div className="px-4 py-3">
                <div className="flex justify-between text-white">
                    <h5 className="leading-4">{book.title}</h5>

                    {/* open actions */}
                    <button
                        onClick={handleShowActions}
                        className="px-2 relative hover:text-orange-600"
                    >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>

                    {showActions &&
                        <ul className="absolute right-6 bottom-16 text-sm text-center bg-orange-400/90 rounded-lg cursor-pointer">
                            <li
                                onClick={() => { onEditBook(book); handleShowActions(false) }}
                                className="px-4 py-1 hover:bg-orange-600 rounded-t-lg"
                            >
                                Edit
                            </li>

                            <li
                                onClick={() => onRemoveBook(book.id)}
                                className="px-4 py-1 hover:bg-orange-600 rounded-b-lg"
                            >
                                Delete
                            </li>
                        </ul>
                    }

                </div>

                <p>
                    <span className="text-slate-400 text-sm">by </span>
                    <span className="text-orange-600 font-semibold">{book.author}</span>
                </p>
            </div>
        </li>
    </>
}