import { useEffect, useState } from "react"
import LoginPage from "./LoginPage";
import CharactersPage from "./CharactersPage";

function SplashScreenPage() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        try {
            setLoading(false);
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