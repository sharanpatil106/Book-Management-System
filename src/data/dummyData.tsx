import type{ Book } from '../types';
import mockingbird from '../../src/assets/book-cover-To-Kill-a-Mockingbird-many-1961.webp'
import nine from '../../src/assets/3744438.jpg'
import hobbit from '../../src/assets/81hylMcxa3L._UF1000,1000_QL80_.jpg'
import atomic from '../../src/assets/81F90H7hnML.jpg'
import pride from '../../src/assets/md_9788172344504_300620201142862.jpg'
import steve from '../../src/assets/Steve Jobs.jpg'
import sapiens from '../../src/assets/0_RArKNBFL91CwGeWU.jpg'
import now from '../../src/assets/43369246.jpg'
import becoming from '../../src/assets/81KGjsBXQ7L._UF1000,1000_QL80_.jpg'
import brave from '../../src/assets/9781784877736.jpg'

export const dummyBooks:Book[] = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publishedYear: 1960,
    coverImage: mockingbird,
    isRead: true,
    isFavorite: true,
    createdAt: "2024-01-10T09:00:00Z",
    status: "finished",
    description: "A gripping story of racial injustice and childhood innocence.",
    tags: ["classic", "courtroom", "coming-of-age"]
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Sci-Fi",
    publishedYear: 1949,
    coverImage: `${nine}`,
    isRead: false,
    isFavorite: false,
    createdAt: "2024-02-14T15:30:00Z",
    status: "to-read",
    tags: ["dystopia", "political", "totalitarianism"]
  },
  {
    id: 3,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publishedYear: 1937,
    coverImage: `${hobbit}`,
    isRead: false,
    isFavorite: true,
    createdAt: "2024-03-01T12:00:00Z",
    status: "reading",
    description: "A journey through Middle-earth with Bilbo Baggins.",
    tags: ["adventure", "fantasy", "epic"]
  },
  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    publishedYear: 2018,
    coverImage: `${atomic}`,
    isRead: true,
    isFavorite: false,
    createdAt: "2024-04-20T10:15:00Z",
    status: "finished",
    description: "Tiny changes lead to remarkable results.",
    tags: ["habits", "productivity", "self-improvement"]
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publishedYear: 1813,
    coverImage: `${pride}`,
    isRead: false,
    isFavorite: false,
    createdAt: "2024-05-05T14:00:00Z",
    status: "to-read",
    tags: ["classic", "romance", "society"]
  },
  {
    id: 6,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    genre: "Biography",
    publishedYear: 2011,
    coverImage: `${steve}`,
    isRead: true,
    isFavorite: true,
    createdAt: "2024-06-12T08:30:00Z",
    status: "finished",
    description: "The exclusive biography of Steve Jobs based on interviews.",
    tags: ["innovation", "tech", "leadership"]
  },
  {
    id: 7,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    publishedYear: 2011,
    coverImage: `${sapiens}`,
    isRead: false,
    isFavorite: false,
    createdAt: "2024-04-20T16:00:00Z",
    status: "to-read",
    description: "A brief history of humankind, from ancient to modern times.",
    tags: ["history", "evolution", "culture"],
  },
  {
    id: 8,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    genre: "Self-Help",
    publishedYear: 1997,
    coverImage: `${now}`,
    isRead: false,
    isFavorite: false,
    createdAt: "2024-06-01T18:00:00Z",
    status: "to-read",
    description: "A spiritual guide to living in the present moment.",
    tags: ["mindfulness", "spirituality", "wellness"],
  },
    {
    id: 9,
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    publishedYear: 2018,
    coverImage: `${becoming}`,
    isRead: true,
    isFavorite: false,
    createdAt: "2024-03-01T10:20:00Z",
    status: "finished",
    description: "The memoir of former First Lady Michelle Obama.",
    tags: ["memoir", "inspirational", "politics"],
  },
   {
    id: 10,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Sci-Fi",
    publishedYear: 1932,
    coverImage: `${brave}`,
    isRead: true,
    isFavorite: false,
    createdAt: "2024-06-10T08:30:00Z",
    status: "finished",
    description: "A futuristic society obsessed with control and consumerism.",
    tags: ["dystopia", "sci-fi", "future"],
  },
];
