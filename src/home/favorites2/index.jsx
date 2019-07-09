import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default class Favorities2 extends Component {
    render() {
        return (
            <Carousel selectedItem={4}>
                <div>
                    <img src="https://www.colombia.co/wp-content/uploads/2015/02/nevado-del-ruiz-1.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://www.eltiempo.com/files/article_multimedia/uploads/2018/06/06/5b177c3b22c8e.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://www.colombian.com.co/wp-content/uploads/2018/12/ImagenDestacada-Paisajes-01.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Santuario_Nacional_de_Las_Lajas_02.jpg/1024px-Santuario_Nacional_de_Las_Lajas_02.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="http://3.bp.blogspot.com/--dFvnBGME-0/T-_G-IFbdXI/AAAAAAAAAL4/Jv63imVg5vE/s640/CRISTALES_3.jpg" />
                    <p className="legend">Legend 5</p>
                </div>

            </Carousel>
        );
    }
};
