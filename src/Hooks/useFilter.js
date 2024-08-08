import { useState } from "react"
import { useLocalStorage } from "./useLocalStorage"


export  function useFilter(dataList , callback) {

    const [query, setQuery] = useLocalStorage('query','')
    const filterData = dataList.filter((data)=>{
        return callback(data).toLowerCase().includes(query)
    } )
    return [filterData ,setQuery]
}

