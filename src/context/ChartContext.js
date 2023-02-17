import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ChartContext = createContext()

export default ChartContext;

export const ChartProvider = ({children}) => {

    let [languages,setLanguages]=useState('');
    let [hsearch,setHsearch]=useState('');
    const navigate = useNavigate();

    let setfilter=(lang)=>{
        setLanguages(lang);
        navigate('/allprojects')

    }

    let setHfilter=(Hsearch)=>{
        setLanguages(Hsearch);
        navigate('/allprojects')

    }
    let contextData = {
        languages:languages,
        setfilter:setfilter,
        hsearch:hsearch,
        setHfilter:setHfilter,

        
    }
    return(
        <ChartContext.Provider value={contextData} >
            {children}
        </ChartContext.Provider>
    )

}
