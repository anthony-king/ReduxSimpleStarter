import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'
import YOUTUBE_API_KEY from './config/youtube_api'

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));