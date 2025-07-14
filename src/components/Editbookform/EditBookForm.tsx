import { useEffect, useState } from 'react';
import './EditBookForm.css';
import type { Book } from '../../types';
import { FocusTrap } from 'focus-trap-react';

interface EditFormProps {
  book: Book;
  formClose: () => void;
  onUpdate: (updatedBook: Book) => void;
}

export default function EditBookForm({ book, formClose, onUpdate }: EditFormProps) {
  const [formData, setFormData] = useState<Book>(book);

  useEffect(() => {
    setFormData(book);
  }, [book]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    const { name, value, type } = target;

    const updatedValue = type === 'checkbox'
      ? (target as HTMLInputElement).checked
      : value;

    setFormData(prev => ({
      ...prev,
      [name]: updatedValue,
    }));
  };

const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      // ✅ Cast reader.result to string explicitly
      const result = reader.result as string;

      setFormData(prev => ({
        ...prev,
        coverImage: result,
      }));
    };

    reader.readAsDataURL(file);
  }
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
    formClose();
  };

  return (
    <FocusTrap>
       <div className="overlay">
      <div className="edit-form-container">
        <form onSubmit={handleSubmit} className="edit-form">
          <h2>Edit Book</h2>

          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />

          <label>Author:</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} />

          <label>Genre:</label>
          <select name="genre" value={formData.genre} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Biography">Biography</option>
            <option value="History">History</option>
            <option value="Self-Help">Self-Help</option>
            <option value="Other">Other</option>
          </select>

          <label>Published Year:</label>
          <input
            type="number"
            name="publishedYear"
            value={formData.publishedYear}
            onChange={handleChange}
          />

          <label>Status:</label>
          <div className="radio-group">
            {["to-read", "reading", "finished"].map((status) => (
              <label key={status}>
                <input
                  type="radio"
                  name="status"
                  value={status}
                  checked={formData.status === status}
                  onChange={handleChange}
                />
                {status.replace("-", " ").replace(/^\w/, c => c.toUpperCase())}
              </label>
            ))}
          </div>

          <label>
            <input
              type="checkbox"
              name="isFavorite"
              checked={formData.isFavorite}
              onChange={handleChange}
            />
            Mark as Favorite
          </label>

          <label>
            <input
              type="checkbox"
              name="isRead"
              checked={formData.isRead}
              onChange={handleChange}
            />
            Mark as Read
          </label>

          <label>Edit Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {formData.coverImage && (
            <img src={formData.coverImage} alt="Preview" className="preview" />
          )}

          <div className="button-group">
            <button type="submit" className="save-btn">Save</button>
            <button type="button" className="cancel-btn" onClick={formClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>

    </FocusTrap>
  );
}
