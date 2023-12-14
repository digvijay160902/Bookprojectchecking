import React, { createContext, useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [pagenum, setPagenum] = useState(1);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [readMoreClicked, setReadMoreClicked] = useState(false);

  

  const baseUrl = `https://book-finder1.p.rapidapi.com/api/search?results_per_page=24&page=${pagenum}`;

  // console.log(pagenum);

  // Construct updatedUrl conditionally
  const updatedUrl = () => {
    let url = baseUrl;
    if (category) {
      // Encode only the category value
      const encodedCategory = encodeURIComponent(category);
      // setPagenum(1);
      url += `&categories=${encodedCategory}`;
    }
    if (title) {
      // setPagenum(1);
      // console.log(pagenum);
      url += `&title=${title}`;
    }

    if(category && title){
      
      url = `${baseUrl}&title=${title}`;
    }
    // url = url.replace(/page=\d+/, `page=${pagenum}`);

    return url;
  };

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com',
    },
  };

  async function fetchData() {
    setLoading(true);
    try {
      const url = updatedUrl(); // Get the updated URL with proper encoding
      console.log('url is ', url);
      let data = await fetch(url, options);
      let apiresponse = await data.json();
      
      setResponse(apiresponse);
      console.log('Response:', apiresponse);
    } catch (e) {
      console.log('Error fetching data:', e);
    }
    setLoading(false);
  }

  // Sending the value
  const value = {
    options,
    fetchData,
    response,
    setResponse,
    loading,
    setLoading,
    pagenum,
    setPagenum,
    title,
    setTitle,
    baseUrl,
    category,
    setCategory,
    readMoreClicked,
    setReadMoreClicked
   
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
