

const getauth = () => {
    const token = localStorage.getItem('access_token');
    if(token){
        return{loggedin: true, token:token};
    }
    else{
        return{loggedin: false};
    }
}


export default getauth;