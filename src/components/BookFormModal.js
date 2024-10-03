import { useEffect, useState } from "react";

export default function BookFormModal({ book, onSave, onClose }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        if (book) {
            setTitle(book.title);
            setAuthor(book.author);
        } else {
            setTitle('');
            setAuthor('');
        }
    }, [book])

    function handleSubmit(e) {
        e.preventDefault();

        const bookData = {
            // if the book has an id -> edit
            // else -> new book to be added
            id: book?.id || null,
            title,
            author,
            status: book?.status || false
        };

        // add or edit book
        onSave(bookData);
    }

    return <>
        <div className="size-full fixed inset-0 z-50 bg-gray-400/60">
            <div className="absolute right-1/2 translate-x-1/2 translate-y-1/2 z-50">

                <form onSubmit={handleSubmit} className="px-8 py-6 sm:w-96 m-auto bg-slate-800 text-white rounded-xl">
                    <div className="mb-4 flex justify-between items-center">
                        <h3 className="text-lg font-semibold">{book ? 'Edit book' : 'Add new book'}</h3>

                        {/* close button  */}
                        <i onClick={() => onClose()} className="fa-regular fa-circle-xmark cursor-pointer hover:text-orange-600 hover:scale-110"></i>
                    </div>

                    {/* title  */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm">Book title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="px-2 py-1 rounded-xl text-white text-sm bg-transparent border border-orange-600 focus:outline-orange-600"
                        />
                    </div>

                    {/* author  */}
                    <div className="mt-4 flex flex-col gap-1">
                        <label className="text-sm">Author</label>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="px-2 py-1 rounded-xl text-white text-sm bg-transparent border border-orange-600 focus:outline-orange-600"
                        />
                    </div>

                    <div className="mt-4 flex justify-end gap-2">
                        <button
                            onClick={() =>
                                onClose()
                            }
                            className="px-2 py-px border border-orange-600 rounded text-sm text-orange-600 hover:scale-110"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-2 py-px border border-orange-600 rounded text-sm bg-orange-600 hover:scale-110"
                        >
                            {book ? 'Update' : 'Add'}
                        </button>
                    </div>
                </form>
            </div>
        </div>


    </>

}