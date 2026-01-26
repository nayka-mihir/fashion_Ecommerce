export const validateEmail = (email) =>{
    /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

export const validatePassword =(password)=>{
    password.length >= 8 && 
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) 
}