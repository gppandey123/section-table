import React, { useState } from 'react';
import './App.css';
import { SectionData } from './sectionData';
import { Table } from './table/Table';

function App() {
  const [section ,setSection] = useState(SectionData?.data?.sections);

  const onChangeInput = (e, itemId, sectionId) => {
    const { name, value } = e.target
   
    setSection(prevSection =>
      prevSection.map(sections =>
        sections.section_id === sectionId
          ? {
              ...sections,
              items: sections.items.map(item =>
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
        section.map(sectionData => {
            return (
              <Table sectionData={sectionData} onChangeInput={onChangeInput}/>
            )
        })
      } 
    </div>
  );
}

export default App;
