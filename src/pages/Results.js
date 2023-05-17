import React from 'react'
import Header from '../components/Header'
import Result from '../components/Result'
import Pagination from '../components/Pagination'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


const Results = () => {
    // make an array of 8 numbers [1,2,3,4,5,6,7,8]
    const numbers = Array.from({length: 8}, (_, i) => i + 1)
    // map over the array and return a Result component for each number
    // <Result />

    const [query, setResult] = React.useState('');
    // catch the query parameter from the url
  

    useEffect(() => {
        var params = new URLSearchParams(window.location.search);

        // Check if the "query" parameter exists
        if (params.has('query')) {
          // Get the value of the "query" parameter
          var queryString = params.get('query');
          setResult(queryString);
          
          // Use the query parameter value as needed
          console.log('Query parameter value:', queryString);
        } else {
          console.log('Query parameter not found in the URL');
        }
    }, [])

    
  return (
    <>
    <Header query={query} />
    <div className='pb-20 bg-slate-900'>
    <h2 className=" px-48 py-8  text-gray-500">About 20,610,000,000 results (0.26 seconds) </h2>
    <div className=" px-48  mb-12">
    {numbers.map(number => <Result  query={query} />)    }
    </div>
    <div className=" px-48  mb-20">
    <Pagination  />
    </div>

    </div>
    </>
  )
}

export default Results