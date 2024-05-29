import { ModalContext } from '@src/contexts';
import { useContext, useMemo } from 'react';
import Carousel, { ResponsiveType } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export function ImagesCarousel() {
    const { modalContent }: { modalContent: any } = useContext(ModalContext);

    const responsive: ResponsiveType = useMemo(() => {
        return {
            desktop: {
                breakpoint: {
                    max: 9999,
                    min: 1024,
                },
                items: 1,
            },
        };
    }, []);

    return (
        <Carousel responsive={responsive}>
            {modalContent?.images?.map((image: string) => {
                return <div style={{ height: '400px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <img src={image} />
                    </div>;
            })}
        </Carousel>
    );
}