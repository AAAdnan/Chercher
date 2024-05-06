import { useState } from 'react';
import MapComponent from './MapComponent';

function SearchBar() {
  const [location, setLocation] = useState();

  const handleSearch = (event) => {
    event.preventDefault();
    // Dummy location for demonstration
    setLocation([40.730610, -73.935242]); // Latitude and longitude for New York
  };

  return (
    <div className="form-control">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input type="text" placeholder="Search for a restaurant" className="input input-bordered input-primary w-full max-w-xs" />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
      <MapComponent location={location} />
    </div>
  );
}

export default SearchBar;
