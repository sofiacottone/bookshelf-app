import { useState } from "react"
import Book from "./Book"

export default function BookList({ books, onRemoveBook, onToggleBook, onEditBook }) {
    const [sortBy, setSortBy] = useState('input');

    let sortedBooks;

    if (sortBy === 'input') sortedBooks = books;
    if (sortBy === 'alphabetical') sortedBooks = books.slice().sort((a, b) => a.title.localeCompare(b.title));
    if (sortBy === 'status') sortedBooks = books.slice().sort((a, b) => a.status - b.status);

    return <>

        {/* sorting options */}
        <div className="mx-6 mt-10 text-right text-white text-sm">
            <label>Sort by </label>
            <select
                value={sortBy}
                onChange={(e) =>
                    setSortBy(e.target.value)
                }
                className="px-1 py-px text-center rounded-xl bg-orange-600 border border-orange-600 focus:outline-orange-600"
            >
                <option value='input'>Input</option>
                <option value='alphabetical'>A-Z</option>
                <option value='status'>Status</option>
            </select>
        </div>

        {/* books  */}
        {books.length
            ? (<ul className="py-4 flex flex-wrap justify-start gap-6">
                {sortedBooks.map((book) => (
                    <Book
                        book={book}
                        key={book.id}
                        onRemoveBook={onRemoveBook}
                        onToggleBook={onToggleBook}
                        onEditBook={onEditBook}
                    />
                ))}
            </ul>)
            : <p className="mx-6 md:ms-0 my-6 text-orange-600 text-center font-semibold text-lg">Start adding books to your Bookshelf &#58;&#41;</p>
        }


    </>
}