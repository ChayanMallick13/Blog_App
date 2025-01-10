import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();



function AppContextProvider({children}){
    const [loadingB , setLoadingB] = useState(false) ;
    const [loadingU , setLoadingU] = useState(false) ;
    const [blogs , setBlogs] = useState([] ) ;
    const [users , setUsers] = useState([] ) ;
    const [userschangeTracker,setUCT] = useState(false);
    const [isLoggedIn , setIsLoggedIn] = useState(false) ; 
    const [currentUser , setCurrentUser] = useState('hh') ; 
    const [ApiValueChangeTracker,setAVCT] = useState(true);
    const [showSignup,setshowSignUp] = useState(false);
    
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
            localStorage.setItem('userName',data.userName);
            console.log("ff",localStorage.getItem('userName'));
            navigate("/");
            setCurrentUser(formData.get('username')) ; 

        }
        else{
            toast.error(jsondata?.message) ;
            setshowSignUp(true);
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
                const result = await response.json();
                if(result?.status===1){
                    toast.error(result?.message);
                }
                else if(result?.status===2){
                    toast.success('New User Resgistered');
                    setUCT(prev => !prev);
                    setCurrentUser(data.userName) ; 
                    localStorage.setItem('userName',data.userName);
                    setIsLoggedIn(true);
                    navigate("/") ; 
                }


            } 
            catch (error) {
                console.error('Error:', error);
                toast.error('Error Occurred'); 
            }

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
                setAVCT(prev => !prev);
                toast.success('Post Added Successfully');

            } 
            catch (error) {
                console.error('Error:', error);
                toast.error("post not created "); 
            }

        navigate("/") ; 

    }


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


    }

    function userPresentHandler(userName){
        setCurrentUser(userName);
        setIsLoggedIn(true);
        navigate('/');
    }

    function signOutHandler(){
        setIsLoggedIn(false);
        setCurrentUser(null);
        localStorage.clear();
        navigate('/');
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
        deletePost,
        showSignup,
        userschangeTracker,
        userPresentHandler,
        signOutHandler
    } ;


    return <AppContext.Provider value={value}>
        {children} 
    </AppContext.Provider>

}

export default AppContextProvider ; 
