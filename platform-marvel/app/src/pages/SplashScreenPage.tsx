import { useEffect, useState } from "react"
import LoginPage from "./LoginPage";
import CharactersPage from "./CharactersPage";
import CustomText from "../components/CustomText";

/**
 * Página de SplashScreen, onde será mostrado inicialmente ao abrir o App.
*/
function SplashScreenPage() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        try {
            setTimeout(() => {
                setLoading(true);
            }, 1000);
        } catch (error) {
            console.error(error);
        }
    });    

    let mainContainer = (
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
    );

    if (loading) {
        mainContainer = (
            <LoginPage/>
        );
    }

    return (
        <>
            { mainContainer }
        </>
    )
}

export default SplashScreenPage