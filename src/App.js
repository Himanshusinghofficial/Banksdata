import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Searchbar from './components/search/Searchbar';
import Table from './components/table/StickyHeadTable';

function App() {
  return (
    <Provider store={store}>
    <div class="container mx-auto">
      <div class="mt-6 mb-6">
      <Searchbar />
      </div>
    </div>
    <Table />
    </Provider>
  );
}

export default App;
