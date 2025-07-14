import React from 'react'
import '../../components/Filterbar/FilterBar.css'

interface FilterBarProps {
    onFilterStatus: (status: string) => void
    onFilterGenre: (genre: string) => void
    onFavToggle: (value: boolean) => void
}
const FilterBar: React.FC<FilterBarProps> = ({onFilterStatus,onFilterGenre,onFavToggle})=>{
  return (
    <div className='filterBarContainer'>
      <div className='genre'>
        <label htmlFor="">Genre</label>
          <select name="" className="only-arrow" onChange={(e)=>onFilterGenre(e.target.value)}>
                <option value=''>All</option>
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
      </div>
      <div className="btns">
        <button onClick={()=>onFilterStatus('')}>All</button>
        <button onClick={()=>onFilterStatus('to-read')} >to-read</button>
        <button onClick={()=>onFilterStatus('reading')}>reading</button>
        <button onClick={()=>onFilterStatus('finished')}>finished</button>
      </div>
      <div className="fav-btn">
        <p>Show Favorites</p>
        <label className="switch">
        <input type="checkbox" onChange={(e) => onFavToggle(e.target.checked)}/>
        <span className="slider"></span>
        </label>
      </div>
    </div>
  )
}

export default FilterBar