export const useLocalStorage = (key) =>{

    const setItem = (value)=>{
        try {
        window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };

    const getItem = ()=>{
        try {
            return JSON.parse(window.localStorage.getItem(key));
        } catch (error) {
            console.log(error);
        }
    }

    const remove = ()=>{
        try {
            window.localStorage.removeItem(key);
        } catch (error) {
            console.log(error);
        }
    }

    return {setItem , getItem , remove};

}