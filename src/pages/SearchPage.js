import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ImageList from '../components/ImageList';
import searchImages from '../api/api';

function SearchPage() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        setImages(result);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    );
}

export default SearchPage;