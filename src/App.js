import React, { useEffect, useState } from 'react';
import './App.css';
import { Table } from './table/Table';

function App() {
  const [section ,setSection] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setSection(data?.data?.sections))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const onChangeInput = (e, itemId, sectionId) => {
    const { name, value } = e.target
   
    setSection(prevSection =>
      prevSection?.map(sections =>
        sections.section_id === sectionId
          ? {
              ...sections,
              items: sections?.items?.map(item =>
                item.item_id === itemId
                  ? { ...item, [name]: value }
                  : item
              )
            }
          : sections
      )
    );

  }
  return (
    <div className="App">
       {
        section ? section?.map(sectionData => {
            return (
              <Table sectionData={sectionData} onChangeInput={onChangeInput}/>
            )
        }) : <p>Loading...</p>
      } 
    </div>
  );
}

export default App;
