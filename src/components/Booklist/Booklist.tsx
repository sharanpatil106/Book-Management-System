import type {Book} from '../../types'
import '../../components/Booklist/Booklist.css'
import BookCard from '../Bookcard/BookCard'


interface BooklistProps{
  books: Book[]
}
const Booklist: React.FC<BooklistProps> = ({books})=>{
  
  return (
    <div className='listContainer'>
      {books.map((book)=>(
        <BookCard key={book.id} book={book}/>
      ))}
    </div>
    
  )
}

export default Booklist
