export const validateInput = (
    input: string,
    rules: { required?: boolean, minLength?: number },
    setError: React.Dispatch<React.SetStateAction<string>>
) => {
    if (rules.required && !input) {
        setError('Este campo é obrigatório');
        return false;
    }
    if (rules.minLength && input.length < rules.minLength) {
        setError(`Este campo deve ter pelo menos ${rules.minLength} caracteres.`);
        return false;
    }
    setError('');
    return true;
}