// Salvar no localStorage
export const saveToLocalStorage = (key: string,value: any) => {
    localStorage.setItem(key, value);
};

// Recuperar do localStorage
export const getFromLocalStorage = (key: string) => {
    return localStorage.getItem(key);
};