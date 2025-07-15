import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import './AddBookForm.css';
import { useNavigate } from 'react-router-dom';
import {FocusTrap} from 'focus-trap-react';
import { generateId  } from '../../utils/Utils';

interface FormData {
  title: string;
  author: string;
  genre: string;
  year: string;
  readingStatus: string;
  isFavorite: boolean;
  isRead: boolean;
  image: File | null;
}

interface AddBookFormProps {
  onClose: () => void;
  onAdd: (formData: FormData) => void;
}

const AddBookForm: React.FC<AddBookFormProps> = ({ onClose, onAdd }) => {
  const [imagePreview, setImagePreview] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    title: '',
    author: '',
    genre: '',
    year: '',
    readingStatus: '',
    isFavorite: false,
    isRead: false,
    image: null
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const formDataFunc = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));

    setErrors(prevErrors => {
      const newErrors = { ...prevErrors };
      delete newErrors[name];
      return newErrors;
    });
  };

  const PreviewFunc = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    if (target.files?.[0]) {
      const file = target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(file);

      setFormData(prevFormData => ({
        ...prevFormData,
        image: file,
      }));

      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors.image;
        return newErrors;
      });
    }
  };

const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  const newErrors: Record<string, string> = {};

  if (!formData.title.trim()) newErrors.title = 'Title is required';
  if (!formData.author.trim()) newErrors.author = 'Author is required';
  if (!formData.genre) newErrors.genre = 'Genre is required';
  if (!formData.year.trim() || !/^\d{4}$/.test(formData.year)) newErrors.year = 'Valid 4-digit year required';
  if (!formData.readingStatus) newErrors.readingStatus = 'Status is required';
  if (!formData.image) newErrors.image = 'Image is required';

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setErrors({});

const newBook = {
  ...formData,
  id:generateId(),
  createdAt: new Date().toISOString(),
};

  const existingBooks = JSON.parse(localStorage.getItem('books') || '[]');
  const updatedBooks = [...existingBooks, newBook];
  localStorage.setItem('books', JSON.stringify(updatedBooks));

  onAdd(newBook);
  console.log("New book added:", newBook);

  onClose();
  alert('Book added successfully!');
  navigate('/');
};


  return (
<FocusTrap>
    <div className='overlay-add'>
      <div className='add-form-container'>
        <form className='add-form' onSubmit={handleSubmit}>
          <h2>Add New Book</h2>

          <label>Book Title:</label>
          <input id='t' type='text' name='title' value={formData.title} onChange={formDataFunc} />
          {errors.title && <span className='err'>{errors.title}</span>}

          <label>Author:</label>
          <input id='a' type='text' name='author' value={formData.author} onChange={formDataFunc} />
          {errors.author && <span className='err'>{errors.author}</span>}

            <div className="genre-wrapper">
              <label>Genre:</label>
              <select id='s' name='genre' value={formData.genre} onChange={formDataFunc}>
                <option value=''>Select</option>
                <option value='Fiction'>Fiction</option>
                <option value='Non-Fiction'>Non-Fiction</option>
                <option value='Mystery'>Mystery</option>
                <option value='Romance'>Romance</option>
                <option value='Sci-Fi'>Sci-Fi</option>
                <option value='Fantasy'>Fantasy</option>
                <option value='Biography'>Biography</option>
                <option value='History'>History</option>
                <option value='Self-Help'>Self-Help</option>
                <option value='Other'>Other</option>
              </select>
            </div>
          {errors.genre && <span className='err'>{errors.genre}</span>}

          <label>Published Year:</label>
          <input id='y' type='number' name='year' min="1000" max="9999" value={formData.year} onChange={formDataFunc} />
          {errors.year && <span className='err'>{errors.year}</span>}

          <label>Status:</label>
          <div className='radio-group'>
            {['to-read', 'reading', 'finished'].map((status) => (
              <label key={status}>
                <input
                  type='radio'
                  name='readingStatus'
                  value={status}
                  checked={formData.readingStatus === status}
                  onChange={formDataFunc}
                />
                {status.replace('-', ' ').replace(/^[a-z]/, c => c.toUpperCase())}
              </label>
            ))}
          </div>
          {errors.readingStatus && <span className='err'>{errors.readingStatus}</span>}

          <label className='checkbox-label'>
            <input type='checkbox' name='isFavorite' checked={formData.isFavorite} onChange={formDataFunc} />
            &nbsp;&nbsp;Mark as Favorite
          </label>

          <label className='checkbox-label'>
            <input type='checkbox' name='isRead' checked={formData.isRead} onChange={formDataFunc} />
            &nbsp;&nbsp;Mark as Read
          </label>

          <label>Upload Cover Image:</label>
          <input type='file' name='image' accept='image/*' onChange={PreviewFunc} />
          {imagePreview && <img src={imagePreview} alt='preview' className='preview' />}
          <span className='image-err'>{errors.image}</span>

          <div className='button-group'>
            <button type='submit' className='save-btn'>Save</button>
            <button type='button' className='cancel-btn' onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
</FocusTrap>
  );
};

export default AddBookForm;
