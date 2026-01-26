export const validateEmail = (email) =>{
    const pattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    pattern.test(email);
}

export const validatePassword =(password)=>{
    const Passwordpattern = password.length >= 8 && 
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password); 
}