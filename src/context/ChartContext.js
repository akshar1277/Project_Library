import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ChartContext = createContext()

export default ChartContext;

export const ChartProvider = ({children}) => {

    let [languages,setLanguages]=useState('');
    let [hsearch,setHsearch]=useState('');
    let [filteredData,setFilteredData]=useState([]);

    const navigate = useNavigate();

    let setFData=(f)=>{
        setFilteredData(f);
        



    }

    let setfilter=(lang)=>{
        setLanguages(lang);
        navigate('/allprojects')

    }

    let setHfilter=(Hsearch)=>{
        setHsearch(Hsearch);
        navigate('/allprojects')

    }
    let contextData = {
        languages:languages,
        setfilter:setfilter,
        hsearch:hsearch,
        setHfilter:setHfilter,
        filteredData:filteredData,
        setFData:setFData,

        
    }
    return(
        <ChartContext.Provider value={contextData} >
            {children}
        </ChartContext.Provider>
    )

}
