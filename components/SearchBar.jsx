import { useState } from 'react';
import dynamic from 'next/dynamic';

const LazyMap = dynamic(() => import("../components/Map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});


const SearchBar = () => {
  const [location, setLocation] = useState();

  const handleSearch = (event) => {
    event.preventDefault();
    setLocation([40.730610, -73.935242]); // Latitude and longitude for New York
  };

  return (
    <div className="form-control">
      <form onSubmit={handleSearch} className="flex gap-2">
      <input type="text" placeholder="Search for a restaurant" className="input input-bordered w-full max-w-xs" />
      <button type="submit" className="btn btn-primary">Search</button>
      </form>
      <LazyMap location={location} />
    </div>
  );
}

export default SearchBar;
