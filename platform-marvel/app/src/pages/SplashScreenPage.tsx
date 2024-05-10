import { useEffect, useState } from "react"
import LoginPage from "./LoginPage";
import CharactersPage from "./CharactersPage";
import CustomText from "../components/CustomText";
import { useNavigate } from "react-router-dom";

/**
 * Página de SplashScreen, onde será mostrado inicialmente ao abrir o App.
*/
function SplashScreenPage() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            setTimeout(() => {
                setLoading(true);
                navigate('/login');
            }, 1000);
        } catch (error) {
            console.error(error);
        }
    });

    return (
        <CustomText
            fontSize="100px"
            fontWeight="normal"
            color="#000"
            width="411px"
            height="113px"
            textAlign="left"
        >
            Marvel
        </CustomText>
    )
}

export default SplashScreenPage