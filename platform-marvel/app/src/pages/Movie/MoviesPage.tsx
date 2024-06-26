import { useEffect, useState } from "react";
import MenuBar from "../../components/MenuBar/MenuBar"
import { MovieType } from "../../domain/movie"
import getMoviesData from "../../services/movieService";
import { getFromLocalStorage } from "../../utils/localStorage";
import { Container } from "./Movies.styles";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { styled } from '@mui/system';
import { CarouselList } from "../../components/CarouselList/CarouselList";
import { ModalInfo } from "../../components/ModalInfo/ModalInfo";
import { useImageLoader } from "../../hooks/useImageLoader";

const StyledSelect = styled(Select)(({ theme }) => ({
    width: '165px',
    height: '44px',
    marginLeft: '20px',
    marginBottom: '20px',
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
    const [showError, setShowError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<string>('');
    const [containerZIndex, setContainerZIndex] = useState('auto');

    const fetchData = async () => {
        try {
            const response = await getMoviesData();
            if (response !== null) {
                setMovies(response);
            } else {
                console.error('A resposta da API é nula.');
                setShowError(true);
                setMessageError('A resposta da API é nula.');
            }
        } catch (error) {
            console.error('Erro ao obter dados dos Filmes:', error);
            setShowError(true);
            setMessageError('Erro ao obter dados dos Filmes');
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
            setShowError(true);
            setMessageError(`Não foram encontrados filmes do tipo: ${selectType}`);
        }
    }

    const [images, imageLoadError, imageLoadErrorMessage] = useImageLoader(false, true, movies, undefined);

    useEffect(() => {   
        if (imageLoadError) {
            setShowError(true);
            setMessageError(imageLoadErrorMessage);
        }
    }, [imageLoadError, imageLoadErrorMessage]);

    return (
        <>
            <MenuBar setContainerZIndex={setContainerZIndex} />

            <Container style={{ zIndex: containerZIndex }}>
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

                {/* Listagem em formato de Carousel */}
                <CarouselList propList={movies} images={images} page="movie" />


                {
                    showError ? (
                        < ModalInfo
                            title='Erro de carregamento'
                            body={messageError}
                            show={showError}
                            isButtonPrimary={false}
                            colorPrimary='primary'
                            colorSecondary='secondary'
                            titleButtonPrimary='Sair'
                            titleButtonSecondary='Fechar'
                            onHide={() => setShowError(false)}
                        />
                    ) : <></>
                }

            </Container>
        </>
    )
}

export default MoviesPage