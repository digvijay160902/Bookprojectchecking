import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContext';

export default function Pagination() {
  const context = useContext(AppContext);
  const { pagenum, setPagenum, fetchData} = context;
  
  const[next,setNext]=useState(false);
  const[prev,setPrev]=useState(false);

  
  const handleNextClick = () => {
    const page = pagenum+1;
    setPagenum(page);
    setNext(true);
  };


  const handlePrevClick = () => {
    if (pagenum > 1) {
      const page = pagenum-1;
      setPrev(true);
      setPagenum(page);
    }
  };

  useEffect(()=>{
     if(prev){
        setPrev(false);
        fetchData();
     }
     if(next){
      setNext(false);
      fetchData();
     }

  },[prev,next])



  return (
    <div>

      <div className='flex justify-between'>
        {pagenum > 1 && (
         
        <button
        onClick={handlePrevClick}
        className="px-4 py-2 font-bold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 m-4">previous</button>
        )}
        <button onClick={handleNextClick} className="px-4 py-2 font-bold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 m-4">
          Next 
        </button>
      </div>
      {/* <div>{next ? <span>next</span>:<span>not next</span>}</div> */}
    </div>
  );
}





