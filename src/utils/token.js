export const getToken = ()=>{
   return  localStorage.getItem('TOKEN')
};

export const setToken =(token)=>{
    localStorage.setItem('TOKEN',token)
}

export const clearToken =()=>{
    localStorage.removeItem('TOKEN')
}