import { Box, Button, Card, CardContent, CardMedia, styled, Typography, useTheme } from "@mui/material";
import { CardProps } from "./cardProps";

export const StyledCard = styled(Card)(({ theme }) => ({
    width: 289,
    height: 439,
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: 'auto',
        borderRadius: 20,
    },
}));


export const CardList: React.FC<CardProps> = ({ name, description, backgroundImage, onShowModal }) => {
    const theme = useTheme();
    return (
        <StyledCard>
            <CardMedia
                component="div"
                sx={{
                    height: 234,
                    background: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'end',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,

                    [theme.breakpoints.down('sm')]: {
                        height: 200,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    },
                }}
            />
            <CardContent
                sx={{
                    flexGrow: 1,
                    bgcolor: '#ff0000',
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: 2,
                    [theme.breakpoints.down('sm')]: {
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        padding: 1,
                    }
                }}>
                <Box>
                    <Typography
                        sx={{
                            color: 'white',
                            fontSize: '20px',
                            textAlign: 'center',
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '18px',
                              },
                        }}
                        gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography
                        sx={{
                            color: 'white',
                            fontSize: '12px',
                            textAlign: 'left',
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '10px',
                              },
                        }}
                        variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </Box>
                <Button size="small"
                    onClick={onShowModal}
                    sx={{
                        alignSelf: 'center',
                        marginTop: 'auto',
                        fontSize: '20px',
                        color: 'white',
                        marginBottom: 1,
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '18px',
                            marginBottom: 0.5,
                          },
                    }}>
                    Ver detalhes
                </Button>
            </CardContent>

        </StyledCard>
    );
}