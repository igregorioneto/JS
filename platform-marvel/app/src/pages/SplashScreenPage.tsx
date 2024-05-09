import { useEffect, useState } from "react"
import LoginPage from "./LoginPage";
import CharactersPage from "./CharactersPage";

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
        <LoginPage/>
    );

    if (loading) {
        mainContainer = (
            <CharactersPage />
        );
    }

    return (
        <>
            { mainContainer }
        </>
    )
}

export default SplashScreenPage