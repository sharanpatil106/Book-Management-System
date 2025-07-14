import React from 'react'
import Bookicon from '../../assets/open-book.png'
import Usericon from '../../assets/people.png'
import './Navbar.css'

interface NavbarProps {
  AddBook: () => void
    searchTerm: string;
  onSearchChange: (value: string) => void;
}
const Navbar: React.FC<NavbarProps> = ({ AddBook, searchTerm, onSearchChange }) => {

  return (
    <div className='navbarContainer'>
      <div className='navbarLeft'>
        <img src={Bookicon} alt="Book Icon" />
        <h1 className='head'>BookShelf Manager</h1>
      </div>
      <div className="navInput">
        <input id='input' placeholder='Search For Books' type="text"  value={searchTerm} onChange={(e) => onSearchChange(e.target.value)}/>
      </div>
      <div className="navBtn">
        <button id='addNew' onClick={AddBook}>Add New Book</button>
        <img id='navUser' src={Usericon} alt="User Icon" />
      </div>
    </div>
  )
}
export default Navbar