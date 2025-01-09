import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

function AppContextProvider({children}){
    const [loadingB , setLoadingB] = useState(false) ;
    const [loadingU , setLoadingU] = useState(false) ;
    const [blogs , setBlogs] = useState([] ) ;
    const [users , setUsers] = useState([] ) ;
    const navigate = useNavigate() ; 

    const urlBlog = "http://127.0.0.1:8000/api/v0.1/get/posts"
    const urlUser = "http://127.0.0.1:8000/api/v0.1/allusers"

    async function fetchblogs() {
        setLoadingB(true) ; 

        try{
            const result = await fetch(urlBlog) ; 
            const data = await result.json() ; 

            // set blogs here after from fetching from api 
            setBlogs(data.posts) ; 
        }
        
        catch(err){
            alert("something went wrong") ; 
            setBlogs([]) ; 
            return ; 
        }
        
        setLoadingB(false) ; 
        
    }
    async function fetchUser() {
        setLoadingU(true) ; 
        try{
            const result = await fetch(urlUser) ; 
            const data = await result.json() ; 
            
            // set blogs here after from fetching from api 
            setUsers(data.users) ; 
            
        }

        catch(err){
            alert("something went wrong") ; 
            setUsers([]) ; 

            return ; 
        }
        setLoadingU(false) ; 
    }

    function signinHandler(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
        };

        const matched = users.some(user => user.username === data.username && user.password === data.password ) ; 

        if(matched){
            alert("login success") ; 
            navigate("/")
        }
        else{
            alert("user not found sign up") ;
            navigate("/signup") ; 
        }
    }

    async function signUpHandler(event) {

        

            event.preventDefault();
            const formData = new FormData(event.target);
            const data = {
                name: formData.get('name'),
                username: formData.get('username'),
                password: formData.get('password'),
            };
console.log(data);
            try {
                const response = await fetch('http://localhost:8000/api/v0.1/newuser', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();

            } 
            catch (error) {
                console.error('Error:', error);
                alert("data not sent"); 
            }

        navigate("/") ; 

    }


    const value = {
        loadingB,
        setLoadingB, 
        loadingU,
        setLoadingU, 
        blogs , 
        setBlogs,
        fetchblogs,
        fetchUser,
        users,
        setUsers,
        signinHandler,
        signUpHandler,
    } ;


    return <AppContext.Provider value={value}>
        {children} 
    </AppContext.Provider>


}

export default AppContextProvider ; 
