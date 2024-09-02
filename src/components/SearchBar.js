import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    setTerm('');
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input className="border-solid bg-blue-200 rounded-md p-2.5 mt-2 mb-4" value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
