import { useEffect, useState } from "react";
import Header from "./components/Header";
import BookList from "./components/BookList";
import BookFormModal from "./components/BookFormModal";
import Footer from "./components/Footer";


export default function App() {
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem("books")) || []);
  const [showModal, setShowModal] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  // update localStorage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  // add or edit books
  function handleSaveBook(book) {
    if (!book.title || !book.author) return;

    if (book.id) {
      // edit an existing book
      const updatedBooks = books.map((b => b.id === book.id ? book : b));
      setBooks(updatedBooks);
    } else {
      // add a new book
      const newBook = { ...book, id: crypto.randomUUID(), status: false };
      setBooks([...books, newBook]);
    }

    // close modal 
    setShowModal(false);
  }

  // open modal to add a new book
  function handleAddBook() {
    setCurrentBook(null);
    setShowModal(true);
  }

  // open modal to edit an existing book
  function handleEditBook(book) {
    setCurrentBook(book);
    setShowModal(true);
  }

  // delete book
  function handleRemoveBook(id) {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  }

  // set book status
  function handleToggleBook(id) {
    setBooks((books) =>
      books.map((book) =>
        book.id === id
          ? { ...book, status: !book.status }
          : book
      )
    )
  }

  return (
    <div className="App px-6 max-w-3xl m-auto">
      <Header books={books} />

      <main className="overflow-y-auto h-[calc(100vh-126px)]">

        <div className="mb-2 flex justify-between items-center font-semibold">
          <h3 className="text-xl text-white">Booklist</h3>
          <button onClick={handleAddBook} className="px-2 py-px me-4 text-orange-600 uppercase rounded-xl hover:bg-slate-300 hover:scale-110">
            + Add
          </button>
        </div>

        <BookList
          books={books}
          onEditBook={handleEditBook}
          onRemoveBook={handleRemoveBook}
          onToggleBook={handleToggleBook}
        />

        {showModal && (
          <BookFormModal
            book={currentBook}
            onSave={handleSaveBook}
            onClose={() => setShowModal(false)}
          />
        )}

      </main>
      <Footer />
    </div>
  );
}
