// Salvar no localStorage
export const saveToLocalStorage = (key: string,value: any) => {
    localStorage.setItem(key, value);
};

// Recuperar do localStorage
export const getFromLocalStorage = (key: string) => {
    return localStorage.getItem(key);
};

// Removendo do localStorage
export const removeFromLocalStorage = (key: string) => {
    localStorage.removeItem(key);
}