  export  interface Book {
  id: number
  title: string
  author: string
  genre?: 
    | 'Fiction'
    | 'Non-Fiction'
    | 'Mystery'
    | 'Romance'
    | 'Sci-Fi'
    | 'Fantasy'
    | 'Biography'
    | 'History'
    | 'Self-Help'
    | 'Other'
  publishedYear: number
  coverImage?: string
  isRead: boolean
  isFavorite: boolean
  createdAt: string
  status: 'to-read' | 'reading' | 'finished'
  description?: string
  tags?: string[]
}
