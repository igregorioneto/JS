import { useEffect, useState } from "react";

interface ImageMap {
    [key: string]: string;
}

const imageMap: { [key: string]: () => Promise<any> } = {
    'amazon': () => import('../assets/amazon.png'),
    'americanas': () => import('../assets/americanas.png'),
    'disney': () => import('../assets/disney.png'),
};

export const useImageLoader = (isSimpleImages: boolean, isImageMaps: boolean, maps?: { image_id: string }[], imageNames?: string[]): [ImageMap, boolean, string] => {
    const [images, setImages] = useState<ImageMap>({});
    const [showError, setShowError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<string>('');

    useEffect(() => {
        const loadImages = async () => {
            try {
                // Importação dinâmica das imagens
                let imageImports: any;
                
                if (isSimpleImages) {
                    imageImports = imageNames?.map(name => {
                        const loadImage = imageMap[name];
                        if (loadImage) {
                            return loadImage().then(image => ({ [name]: image.default }));
                        } else {
                            console.warn(`Imagem não encontrada: ${name}`);
                            setShowError(true);
                            setMessageError(`Imagem não encontrada: ${name}`);
                            return Promise.resolve({});                            
                        }
                    });
                } else {
                    imageImports = maps?.map(prop =>
                        import(`../assets/${prop.image_id}.png`)
                            .then(image => ({ [prop.image_id]: image.default }))
                    );
                }                

                const imageResults = await Promise.all(imageImports);
                const imagesMap = imageResults.reduce((acc, img) => ({ ...acc, ...img }), {})
                setImages(imagesMap);
            } catch (error) {
                console.error('Erro ao carregar imagens:', error);
                setShowError(true);
                setMessageError('Erro ao carregar imagens');
            }
        }

        if (isImageMaps || isSimpleImages) {
            loadImages();
        }
    }, [maps, imageNames]);

    return [images, showError, messageError];
}