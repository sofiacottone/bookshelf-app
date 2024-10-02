import Book from "./Book"
import FormAddUpdateBook from "./FormAddUpdateBook"

export default function BookList({ books }) {
    return <>
        <div className="mb-2 mx-6 md:ms-0 flex justify-between items-center font-semibold">
            <h3 className="text-xl text-white">Booklist</h3>
            <button className="px-2 py-px text-orange-600 uppercase rounded-xl hover:bg-slate-300 hover:scale-110">+ Add</button>
        </div>

        <FormAddUpdateBook />

        <ul className="py-4 flex flex-wrap justify-center md:justify-start gap-6">
            {books.map((book) => (
                <Book book={book} />
            ))}
        </ul>
    </>
}