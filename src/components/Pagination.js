import React from 'react'

const Pagination = () => {
  return (

<nav aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px">
    <li>
      <a href="#" class="px-3 py-2 ml-0 leading-tight text-slate-500 bg-white border border-slate-300 rounded-l-lg hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">Previous</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-slate-500 bg-white border border-slate-300 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-slate-500 bg-white border border-slate-300 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="px-3 py-2 text-blue-600 border border-slate-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-slate-500 bg-white border border-slate-300 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-slate-500 bg-white border border-slate-300 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-slate-500 bg-white border border-slate-300 rounded-r-lg hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>


  )
}

export default Pagination