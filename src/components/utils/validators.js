export const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
};


export const validatePassword =(password)=>{
    return password.length >= 8 && 
            /[A-Z]/.test(password) &&
            /[0-9]/.test(password) 
}