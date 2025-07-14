import React, { useState } from 'react'
import '../../components/Bookcard/BookCard.css'
import Oval from '../../assets/oval.png'
import Heart from '../../assets/heart (1).png';
import type { Book } from '../../types';
import { useNavigate } from 'react-router-dom';

interface BookCardProps{
 book : Book
}
const BookCard:React.FC<BookCardProps>=({book})=>{

  const[isFav , setIsFav] = useState(book.isFavorite)
    const navigate = useNavigate();

  const toggleIsfav = (event:React.MouseEvent<HTMLSpanElement>)=>{
    event.stopPropagation()
    const value = !isFav
    setIsFav(value)
    book.isFavorite = value
    if(value===true){
      console.log(book.title +" is added  to favorite and favorite changed to "+book.isFavorite)
    }
    else{
      console.log(book.title +" is removed from favorites and favorite changed to "+book.isFavorite)
    }
  }
    const handleCardClick = () => {
    navigate(`/about/${book.id}`);
  };
  
  return (
   <div className="overall">
     <div className='cardContainer' onClick={()=>handleCardClick()} >
     <div className="cc">
       <div className="imgContainer">
        <img src={book.coverImage} id='img' alt="" />
      </div>
      <div className="cardContent">
        <p id='title'>{book.title}</p>
        <p id='author'>{book.author}</p>
        <p id='genre'>{book.genre}</p>
        <div className="status">
            <div className="inner">
              <img src={Oval} style={{
               backgroundColor:
             book.status === 'reading'
            ? 'blue'
            : book.status === 'finished'
            ? 'green'
            : 'red',
              }} alt="" />
              <p id='innerStatus'>{book.status}</p>
            </div>
            <div className='secondInner'>
           <img className='heartIcon' src={Heart} onClick={toggleIsfav} style={{
            filter: isFav === true? 'brightness(0) saturate(100%) invert(16%) sepia(96%) saturate(7471%) hue-rotate(-7deg) brightness(103%) contrast(110%)': 'grayscale(90%)'
           }} />
            </div>
        </div>
      </div>
     </div>
    </div>
   </div>
  )
}

export default BookCard