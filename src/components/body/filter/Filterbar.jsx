import React from 'react';
import Filteritem from './Filteritem';

export default function Filterbar() {

    const filters = [
        {id:0, name:"Front End", tag:"FE"},
        {id:1, name:"Back End", tag:"BE"}
    ];

    const getMetadata = require("metadata-scraper")

    const scrap = async () => {
        const data = await getMetadata("https://www.apple.com/es/")
        console.log(data)
    };

  return (
    <div>
        <Filteritem filters={filters}/>
    </div>
  )
}
