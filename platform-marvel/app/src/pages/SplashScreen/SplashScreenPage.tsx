import { useEffect, useState } from "react"
import CustomText from "../../components/CustomText/CustomText";
import { useNavigate } from "react-router-dom";
import { Container } from "./SplashScreen.styles";

/**
 * Página de SplashScreen, onde será mostrado inicialmente ao abrir o App.
*/
function SplashScreenPage() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(true);
            navigate('/login');
        }, 2000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <Container>
            <CustomText
                fontSize="100px"
                fontWeight="normal"
                color="#ffffff"
                width="411px"
                height="113px"
                textAlign="left"
                rectangle={true}
                rectangeMaxHeight='8vw'
                rectangeMaxWidth='15vw'
                style={{ marginLeft: '20vw' }}
            >
                Marvel
            </CustomText>
        </Container>
        
    )
}

export default SplashScreenPage