import type {Book} from '../types'


// used in generating Id
export function generateId():number{
    const timeStamp = Date.now().toString().slice(-2)
    const RandNum = Math.floor(10+Math.random()*90)
    console.log(timeStamp+RandNum)
    return Number(timeStamp+RandNum)
} 

function saveToLocalStorage(bookList: Book[]): void {
  
  localStorage.setItem('books', JSON.stringify(bookList));
}

export function create(bookList: Book[] ,  Book:Omit<Book,'id'>):Book[]{
    const newBook:Book = {...Book , id: generateId() }
    const updatedList = [...bookList,newBook]
    console.log([...bookList , newBook])
    saveToLocalStorage(updatedList)
    return updatedList
}

export function read(): Book[] {
  const storage = localStorage.getItem('books');
  return storage ? JSON.parse(storage) : [];
}

export function update(bookList: Book[], updatedBook: Book): Book[] {
  const updatedList = bookList.map((book) =>
    book.id === updatedBook.id ? { ...book, ...updatedBook } : book
  );

  saveToLocalStorage(updatedList); 
  return updatedList;
}

export function delte(bookList:Book[] , id:number):Book[]{
    const arr = bookList.filter((book)=> book.id !== id)
    console.log(arr)
    saveToLocalStorage(arr)
    return arr
}