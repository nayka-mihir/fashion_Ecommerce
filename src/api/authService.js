export const registerUser = async (data) =>{
    localStorage.setItem("user",JSON.stringify(data));

    return {success : true}
};

export const loginUser= async (data) =>{
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if(storedUser && storedUser.email == data.email && storedUser.password == data.password){
        localStorage.setItem("isAuth","true");
        return {success : true}
    }

    return {success : false, message : "Invalid data"}
}