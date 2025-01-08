import { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({children}){
    const [loading , setLoading] = useState(false) ;
    const [blogs , setBlogs] = useState([] ) ;

    const urlBlog = ""

    async function fetchblogs() {
        setLoading(true) ; 

        try{
            const result = await fetch(urlBlog) ; 
            const data = await result.json() ; 

            // set blogs here after from fetching from api 
            setBlogs(data) ; 
            
        }

        catch(err){
            alert("something went wrong") ; 
            setBlogs([]) ; 
        }

        setLoading(false) ; 

    }

    const value = {
        loading,
        setLoading, 
        blogs , 
        setBlogs,
    } ;


    return <AppContext.Provider value={value}>
        {children} 
    </AppContext.Provider>


}

export default AppContextProvider ; 
