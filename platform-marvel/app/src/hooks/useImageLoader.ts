import { useEffect, useState } from "react";

interface ImageMap {
    [key: string]: string;
}

export const useImageLoader = (maps: { image_id: string }[]): [ImageMap, boolean, string] => {
    const [images, setImages] = useState<ImageMap>({});
    const [showError, setShowError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<string>('');

    useEffect(() => {
        const loadImages = async () => {
            try {
                // Importação dinâmica das imagens
                const imageImports = maps.map(prop =>
                    import(`../assets/${prop.image_id}.png`)
                        .then(image => ({ [prop.image_id]: image.default }))
                );
                const imageResults = await Promise.all(imageImports);
                const imagesMap = imageResults.reduce((acc, img) => ({ ...acc, ...img }), {})
                setImages(imagesMap);
            } catch (error) {
                console.error('Erro ao carregar imagens:', error);
                setShowError(true);
                setMessageError('Erro ao carregar imagens');
            }
        }

        if (maps.length > 0) {
            loadImages();
        }
    }, [maps]);

    return [images, showError, messageError];
}