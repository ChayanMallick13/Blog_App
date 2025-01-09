import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();



function AppContextProvider({children}){
    const [loadingB , setLoadingB] = useState(false) ;
    const [loadingU , setLoadingU] = useState(false) ;
    const [blogs , setBlogs] = useState([] ) ;
    const [users , setUsers] = useState([] ) ;
    const [isLoggedIn , setIsLoggedIn] = useState(false) ; 
    const [currentUser , setCurrentUser] = useState(null) ; 
    const [ApiValueChangeTracker,setAVCT] = useState(true);
    const navigate = useNavigate() ; 

    const urlBlog = `${process.env.REACT_APP_BASE_URL}/get/posts`;
    const urlUser = `${process.env.REACT_APP_BASE_URL}/allusers`;
    console.log(process.env.REACT_APP_BASE_URL);
    async function fetchblogs() {
        setLoadingB(true) ; 

        try{
            const result = await fetch(urlBlog) ; 
            const data = await result.json() ; 

            // set blogs here after from fetching from api 
            setBlogs(data.posts) ; 
        }
        
        catch(err){
            toast.error("Error In Fetch Blogs") ; 
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
            toast.error("Error in Fetching users") ; 
            setUsers([]) ; 

            return ; 
        }
        setLoadingU(false) ; 
    }

    async function signinHandler(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            userName: formData.get('username'),
            Password: formData.get('password'),
        };

        const apires = await fetch(`${process.env.REACT_APP_BASE_URL}/auth`,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    userName:data.userName,
                    Password:data.Password,
                }
            )
        });

        const jsondata = await apires.json();

        const matched = jsondata?.verified;

        if(matched){
            setIsLoggedIn(true);
            toast.success("login success") ; 
            navigate("/");
            setCurrentUser(formData.get('username')) ; 

        }
        else{
            toast.error("user not found sign up") ;
            navigate("/signup") ; 
        }
    }

    async function signUpHandler(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const data = {
                Name: formData.get('name'),
                userName: formData.get('username'),
                Password: formData.get('password'),
            };
            try {
                const apiurl = `${process.env.REACT_APP_BASE_URL}/newuser`;
                const response = await fetch(apiurl, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                setIsLoggedIn(true);
                const result = await response.json();
                console.log(result);

                setCurrentUser(formData.get('username')) ; 

            } 
            catch (error) {
                console.error('Error:', error);
                toast.error("data not sent"); 
            }

        navigate("/") ; 

    }
    async function submitHandler(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const data = {
                title: formData.get('title'),
                body: formData.get('body'),
                username: currentUser,
                category: formData.get('category'),
            };
            try {
                const apiurl = `${process.env.REACT_APP_BASE_URL}/create/post`;
                const response = await fetch(apiurl, {
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
                console.log(result);
                setAVCT(prev => !prev);
                toast.success('Post Added Successfully');

            } 
            catch (error) {
                console.error('Error:', error);
                toast.error("post not created "); 
            }

        navigate("/") ; 

    }

<<<<<<< Updated upstream
    function userPostHandler() {
        navigate("/userPost"); 
=======
    async function deletePost(postid){
        try{
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/deletepost/${postid}`);
            const data = await response.json();
            if(data?.success){
                toast.success('Post Deleted');
                setAVCT(prev => !prev);
            }
            else{
                toast.error('Post Not deleetd');
            }

        }
        catch(err){
            toast.error('Problem in deleting Post');
        }
>>>>>>> Stashed changes
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
        setIsLoggedIn,
        isLoggedIn,
        currentUser,
        setCurrentUser,
        submitHandler,
        ApiValueChangeTracker,
<<<<<<< Updated upstream
        userPostHandler
=======
        deletePost
>>>>>>> Stashed changes
    } ;


    return <AppContext.Provider value={value}>
        {children} 
    </AppContext.Provider>


}

export default AppContextProvider ; 
