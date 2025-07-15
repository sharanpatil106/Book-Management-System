import { useState, useEffect } from 'react'
import { create, read } from '../utils/Utils';
import type { Book } from '../types';
import AddBookForm from '../components/Addbookform/AddBookForm'
import Navbar from '../components/Navbar/Navbar'
import Dashboard from '../components/Dashboard/Dashboard'
import FilterBar from '../components/Filterbar/Filterbar'
import Booklist from '../components/Booklist/Booklist'


interface HomeProps {
  books: Book[];
  updateBook: (updatedBook: Book) => void;
}
export default function Home() {

  const [books, setBooks] = useState<Book[]>(read());
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(read()); 
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<string>('')
  const [selectedStatus, setSelectedStatus] = useState<string>('')
  const [isFav, setIsFav] = useState<boolean>(false)
  const [showAddForm , setShowAddForm] = useState<boolean>(false)
 
// const book = books[0];
// for (let key in book) {
//   console.log(`${key} is of type ${typeof book[key as keyof Book]}`);
// }
 
  const filterGenreFunc = (genre:string) => {
    setSelectedGenre(genre)
    applyFilters(genre, selectedStatus, isFav, searchTerm);
  }

  const filterStatusFunc = (status:string) => {
    setSelectedStatus(status)
    applyFilters(selectedGenre, status, isFav, searchTerm);
  }

  const filterFavFunc = (value:boolean) => {
    setIsFav(value)
     applyFilters(selectedGenre, selectedStatus, value, searchTerm);
  }
   
const applyFilters = (genre: string, status: string, fav: boolean, search: string) => {
  let filtered = books;

  if (genre) {
    filtered = filtered.filter(book => book.genre === genre);
  }

  if (status) {
    filtered = filtered.filter(book => book.status === status);
  }

  if (fav) {
    filtered = filtered.filter(book => book.isFavorite);
  }

  if (search) {
    filtered = filtered.filter(book =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  setFilteredBooks(filtered);
};

useEffect(() => {
  applyFilters(selectedGenre, selectedStatus, isFav, searchTerm);
}, [searchTerm]);


useEffect(() => {
  applyFilters(selectedGenre, selectedStatus, isFav, searchTerm);
}, [books]);


const AddBook = (formData: {
  title: string;
  author: string;
  genre: string;
  year: string;
  readingStatus: string;
  isFavorite: boolean;
  isRead: boolean;
  image: File | null;
}) => {
  const newBook = {
    title: formData.title,
    author: formData.author,
    genre: formData.genre as Book['genre'],
    publishedYear: parseInt(formData.year),
    isFavorite: formData.isFavorite,
    isRead: formData.isRead,
    status: formData.readingStatus as Book['status'],
    createdAt: new Date().toISOString(),
    coverImage: formData.image ? URL.createObjectURL(formData.image) : '',
    description: '',
    tags: [],
  };

  setBooks((prev) => create(prev, newBook));
};

  const handleAddClick=()=>{
    setShowAddForm(true)
  }

let form = null;
if (showAddForm) {
  form = (
    <div className="form-overlay">
      <div className="form-content">
        <AddBookForm
          onAdd={AddBook}
          onClose={() => setShowAddForm(false)}
        />
      </div>
    </div>
  );
}
  return (
    <div>
        <Navbar AddBook={handleAddClick} searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
        {form}
        <Dashboard books={books} />
        <FilterBar  onFilterStatus={filterStatusFunc} onFilterGenre={filterGenreFunc} onFavToggle={filterFavFunc}/>
        <Booklist  books={filteredBooks}/>  
    </div>
  )
}
