import { Box, Button, Card, CardContent, CardMedia, styled, Typography } from "@mui/material";

interface CardListProps {
    name: string;
    description: string;
    backgroundImage: string;
    info: string[];
    avaliations: number;
}

export const StyledCard = styled(Card)(({ theme }) => ({
    width: 289,
    height: 439,
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }));
  

export const CardList: React.FC<CardListProps> = ({ name, description, backgroundImage }) => (
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
                padding: 2  }}>
            <Box>
                <Typography 
                    sx={{
                        color: 'white', 
                        fontSize: '20px', 
                        textAlign: 'center'}} 
                    gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography 
                    sx={{
                        color: 'white', 
                        fontSize: '12px', 
                        textAlign: 'left'}} 
                        variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </Box>
            <Button size="small" href="#" 
                sx={{ 
                    alignSelf: 'center', 
                    marginTop: 'auto', 
                    fontSize: '20px', 
                    color: 'white',  
                    marginBottom: 1}}>
                Ver detalhes
            </Button>
        </CardContent>
        
    </StyledCard>
);