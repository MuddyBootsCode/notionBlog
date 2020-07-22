import React, { useState, useEffect } from 'react';
import "react-notion/src/styles.css";
import { NotionRenderer } from "react-notion";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const result = await fetch('https://notion-api.splitbee.io/v1/page/b2a847477c554189b48ad2ab26d37fb7')
        const blockMap = await result.json();
        setData(blockMap)
      } catch(error){
        console.log(error)
      }
    }
    fetchData();
  }, [])

  const pageData = data || {};

  return (
    <div className="App">
      <NotionRenderer blockMap={pageData} />
    </div>
  );
}

export default App;
