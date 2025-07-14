// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import EditBookForm from '../Editbookform/EditBookForm';
// import type { Book } from '../../types';
// import './About.css';
// import { read, update, delte } from '../../utils/Utils';

// const About: React.FC = () => {
//   const { bookid } = useParams();
//   const [currentBook, setCurrentBook] = useState<Book | null>(null);
//   const [editForm, setEditForm] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [showMarkReadingAlert, setShowMarkReadingAlert] = useState(false);


// useEffect(() => {
//   if (bookid) {
//     const timeout = setTimeout(() => {
//       const books = read();
//       const found = books.find((b) => b.id === Number(bookid));
//       if (found) {
//         setCurrentBook(found);
//       }
//       setLoading(false);
//     }, 100);

//     return () => clearTimeout(timeout);
//   } else {
//     setLoading(false); // also handle invalid or empty bookid
//   }
// }, [bookid]);


//   if (loading) return <p>Loading...</p>;

//   if (!currentBook) return <p>Book not found.</p>;

//   const showEditForm = () => setEditForm(true);
//   const closeEditForm = () => setEditForm(false);

//   const handleUpdate = (updatedBook: Book) => {
//     const books = read();
//     const updatedList = update(books, updatedBook);
//     setCurrentBook(updatedBook);
//   };

//   const handleDelete = () => {
//     const books = read();
//     const updatedList = delte(books, currentBook.id);
//     alert('Book deleted');
//     window.location.href = '/';
//   };

// const markAsReading = () => {
//   const updatedBook = { ...currentBook, status: 'reading' as Book['status'] };
//   const books = read();
//   update(books, updatedBook);
//   setCurrentBook(updatedBook);
//   setShowMarkReadingAlert(true); // trigger alert after re-render
// };
// useEffect(() => {
//   if (showMarkReadingAlert) {
//     alert('Book Marked as Reading');
//     console.log('Book Marked as Reading');
//     setShowMarkReadingAlert(false); // reset
//   }
// }, [showMarkReadingAlert]);

//   return (
//     <div className='ctn'>
//       <div className="abt-container">
//         <div className="data">
//           <div className='im'>
//             <img src={currentBook.coverImage} alt='Book cover' />
//           </div>

//           <div className="dtt">
//             <p id='id1'>{currentBook.title}</p>
//             <p id='id2'>{currentBook.author}</p>
//             <p id='id3'>{currentBook.genre}</p>
//             <p id='id4'>{currentBook.publishedYear}</p>
//             <div className="ccc">
//               <label>
//                 <input type="checkbox" checked={currentBook.status === 'finished'} readOnly />
//                 Finished
//               </label>
//               <label>
//                 <input type="checkbox" checked={currentBook.isRead} readOnly />
//                 Mark as Read
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className="but">
//           <button id='eee' onClick={showEditForm}>Edit Book</button>
//           <button id='ddd' onClick={handleDelete}>Delete Book</button>
//         <button id='rrr' onClick={markAsReading}>Mark as Reading</button>
//         </div>

//         <div className="des">
//           <p id='dess'>Description / Notes</p>
//           <p>{currentBook.description}</p>
//         </div>
//       </div>

//       {editForm && (
//         <EditBookForm
//           book={currentBook}
//           formClose={closeEditForm}
//           onUpdate={handleUpdate}
//         />
//       )}
//     </div>
//   );
// };

// export default About;
