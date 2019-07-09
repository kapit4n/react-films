import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class Favorities3 extends React.Component {
    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={40}
                naturalSlideHeight={30}
                totalSlides={6}
                visibleSlides={3}
                currentSlide={5}
            >
                <Slider>
                    <Slide index={0}>
                        <img src="https://st-listas.20minutos.es/images/2011-05/287091/list_640px.jpg?1304464883" height={400} width={400} />
                    </Slide>
                    <Slide index={1}>
                        <img src="https://i.ytimg.com/vi/pGSM1cxMwA4/maxresdefault.jpg" height={400} width={400} />
                    </Slide>
                    <Slide index={2}>
                        <img src="https://www.absolutviajes.com/wp-content/uploads/2009/02/turismo-brasil.jpg" height={400} width={400} />
                    </Slide>
                    <Slide index={3}>
                        <img src="https://www.hola.com/imagenes/viajes/2016030284148/doce-destinos-brasil-maravillas/0-354-231/a_fortalez-a.jpg" height={400} width={400} />
                    </Slide>
                    <Slide index={4}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Cidade_Maravilhosa.jpg" height={400} width={400} />
                    </Slide>
                    <Slide index={5}>
                        <img src="https://i.pinimg.com/originals/15/61/70/1561700fe1fe41195947e6bb54b22914.jpg" height={400} width={400} />
                    </Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        );
    }
}