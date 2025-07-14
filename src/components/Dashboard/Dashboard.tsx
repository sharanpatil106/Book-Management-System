import React from 'react'
import './Dashboard.css'
import type { Book } from '../../types';


interface DashboardProps{
  books: Book[]
}
const Dashboard: React.FC<DashboardProps>=({books})=>{
    const totalBooks = books.length;
    const CurrentlyReading = books.filter((book)=>book.status==='reading').length
    const favorites = books.filter(book=>book.isFavorite).length
    const finished = books.filter(book=>book.status==='finished').length
    

  return (
    <div className='DashContainer'>
      <div className='card'>
        <p className='Dashhead'>Total Books</p>
        <p className='count'>{totalBooks}</p>
      </div>
      <div className='card'>
        <p className='Dashhead'>Currently Reading</p>
        <p className='count'>{CurrentlyReading}</p>
      </div>
      <div className='card'>
        <p className='Dashhead'>Favorites</p>
        <p className='count'>{favorites}</p>
      </div>
      <div className='card'>
        <p className='Dashhead'>Finished</p>
        <p className='count'>{finished}</p>
      </div>
        <div className='card'>
        <p className='Dashhead'>Others</p>
        <p className='count'>0</p>
      </div>
    </div>
  )
}

export default Dashboard
