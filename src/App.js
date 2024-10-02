import Header from "./components/Header";
import BookList from "./components/BookList";

const initialBooks = [
  {
    id: 1,
    title: 'Guida Galattica per gli autostoppisti',
    author: 'Douglas Adams'
  },
  {
    id: 2,
    title: 'Ristorante al termine dell\'Universo',
    author: 'Douglas Adams'
  },
  {
    id: 3,
    title: 'La vita, l\'universo e tutto quanto',
    author: 'Douglas Adams'
  },
  {
    id: 4,
    title: 'Addio, e grazie per tutto il pesce',
    author: 'Douglas Adams'
  },
  {
    id: 5,
    title: 'Praticamente innocuo',
    author: 'Douglas Adams'
  },
  {
    id: 6,
    title: 'E un\'altra cosa...',
    author: 'Douglas Adams'
  },
]

function App() {
  return (
    <div className="App max-w-2xl px-3 m-auto shadow">
      <Header />
      <main>
        <BookList books={initialBooks} />

      </main>
    </div>
  );
}

export default App;
