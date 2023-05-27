import { useState } from 'react'
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList'
import searchImages from './api'

function App() {
  const [images, setImages] = useState([]);

  //Pass this "term" down to search bar component
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onEnter={handleSubmit} />
      <ImageList images={images}/>
    </div>
  );
}

export default App;
