import { useEffect, useState } from "react";
import MenuBar from "../../components/MenuBar/MenuBar"
import { MovieType } from "../../domain/movie"
import getMoviesData from "../../services/movieService";
import { getFromLocalStorage } from "../../utils/localStorage";
import { Container } from "./Movies.styles";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { CardList } from "../../components/CardList/CardList";
import { Carousel } from "react-bootstrap";

import { styled } from '@mui/system';

const StyledSelect = styled(Select)(({ theme }) => ({
    position: 'absolute',
    width: '165px',
    height: '44px',
    borderColor: '#ff0000',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '10px',
    filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16))',
    backgroundColor: '#000000',
    color: '#ff0000',
    paddingLeft: '10px',
    '& .MuiSelect-select': {
        paddingLeft: '10px',
    },
    '& .MuiSvgIcon-root': {
        color: '#ff0000',
    },
    '& .MuiPaper-root': {
        backgroundColor: '#000000',
        color: '#ff0000',
    },
}));

/**
 * Página de Movies, listagem dos personagens da Marvel.
*/
function MoviesPage() {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [typeMovie, setTypeMovie] = useState('');
    const [images, setImages] = useState<{ [key: string]: string }>({});

    const fetchData = async () => {
        try {
            const response = await getMoviesData();
            if (response !== null) {
                setMovies(response);

                // Importação dinâmica das imagens
                const imageImports = response.map(movie =>
                    import(`../../assets/${movie.image_id}.png`)
                        .then(image => ({ [movie.image_id]: image.default }))
                );
                const imageResults = await Promise.all(imageImports);
                const imagesMap = imageResults.reduce((acc, img) => ({ ...acc, ...img }), {})
                setImages(imagesMap);
            } else {
                console.error('A resposta da API é nula.');
            }
        } catch (error) {
            console.error('Erro ao obter dados dos Filmes:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleChangeType = (event: SelectChangeEvent<string>) => {
        const selectType = event.target.value;
        setTypeMovie(selectType);

        const moviesString = getFromLocalStorage('moviesData');
        if (moviesString) {
            let movies: MovieType[] = JSON.parse(moviesString);
            let filteredMovies = selectType ? movies.filter(movie => movie.type_launch === selectType) : movies;
            setMovies(filteredMovies);
        } else {
            console.error(`Não foram encontrados filmes do tipo: ${selectType}`);
        }
    }

    return (
        <>
            <MenuBar />

            <Container>
                <StyledSelect
                    id="mySelector"
                    value={typeMovie}
                    onChange={handleChangeType}
                    displayEmpty
                    renderValue={(selected: any) => selected.length === 0 ? "Filtrar por" : selected === "launch" ? "Lançamento" : "Cronologia"}
                    className="filter-button"
                >
                    <MenuItem value="">
                        <em>Filtrar por</em>
                    </MenuItem>
                    <MenuItem value="launch">Lançamento</MenuItem>
                    <MenuItem value="chronology">Cronologia</MenuItem>
                </StyledSelect>

                <div className="row justify-content-center">
                    <div className="col-md-12" style={{ width: '100vw' }}>
                        <Carousel
                            interval={null}
                            prevIcon={null}
                            prevLabel={null}
                            indicators={null}
                        >
                            {movies.reduce((slides: JSX.Element[], movie: MovieType, index: number) => {
                                if (index % 3 === 0) {
                                    const moviesInGroup = movies.slice(index, index + 3);
                                    slides.push(
                                        <Carousel.Item key={index}>
                                            <div className="d-flex justify-content-center">
                                                {moviesInGroup.map((movieInGroup) => (
                                                    <div key={movieInGroup.id} style={{marginRight:'10px'}}>
                                                        <CardList
                                                            name={movieInGroup.name}
                                                            description={movieInGroup.description}
                                                            backgroundImage={images[movieInGroup.image_id] || ""}
                                                            info={movieInGroup.streaming_platform}
                                                            avaliations={movieInGroup.critic_rating}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </Carousel.Item>
                                    );
                                }
                                return slides;
                            }, [])}
                        </Carousel>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default MoviesPage