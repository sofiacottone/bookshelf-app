import Stats from "./Stats";

export default function Header({ books }) {
    return <>
        <header className="py-6">
            <h1 className="text-3xl text-white font-semibold">Bookshelf 📚</h1>
            <Stats books={books} />
        </header>
    </>
}