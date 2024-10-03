
export default function Stats({ books }) {
    return <>
        <p className="text-orange-600">
            {!books.length ?
                'No books available'
                : ` ${books.length} Books Available`
            }
        </p>

    </>
}