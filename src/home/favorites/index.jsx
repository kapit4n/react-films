import React from 'react';
import './favorities.css';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';

export default class Favorities extends React.Component {

    componentWillMount() {
        this.setState({
            children: [],
            activeItemIndex: 0,
            columns: 3
        });

        setTimeout(() => {
            this.setState({
                children: this.createChildren(this.imgs.length),
            })
        }, 100);

        this.updateDimensions();
    }

    updateDimensions() {

        var w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
            height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

        console.log("Dimensions updates " + width);

        if (width >= 960) {
            this.setState({ columns: 3 })
        } else if (width < 960 && width >= 640) {
            this.setState({ columns: 2 })
        } else {
            this.setState({ columns: 1 })
        }

        //this.setState({ width: window.width, height: window.height });
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this), false);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this), false);
    }

    imgs = [
        "https://dw8stlw9qt0iz.cloudfront.net/gv1NqqqZAHNe8w6SDFNLQ5Tzc-8=/2000x2000/filters:format(jpeg):quality(75)/curiosity-data.s3.amazonaws.com/images/content/thumbnail/standard/c2c9e466-aefb-4407-ac1d-e4f6db78a3c8.png",
        "https://s18798.pcdn.co/sps-msga/wp-content/uploads/sites/7640/2018/02/bolivia-pic-2.jpg",
        "https://s28987.pcdn.co/wp-content/uploads/2018/12/travel-Bolivia-2.jpg",
        "https://www.coxandkingsusa.com/resources/images/countries/bolivia.jpg",
        "https://theculturetrip.com/wp-content/uploads/2015/11/shutterstock_527099458.jpg"
    ]

    createChildren = n => range(n).map(i => <div key={i} style={{ height: 400, background: '#333' }}><img width="340px" height="400px" src={this.imgs[i]} /></div>);

    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

    render() {
        const {
            activeItemIndex,
            children,
        } = this.state;

        return (
            <ItemsCarousel
                // Placeholder configurations
                enablePlaceholder
                numberOfPlaceholderItems={5}
                minimumPlaceholderTime={1000}
                placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

                // Carousel configurations
                numberOfCards={this.state.columns}
                gutter={12}
                showSlither={true}
                firstAndLastGutter={true}
                freeScrolling={false}

                // Active item configurations
                requestToChangeActive={this.changeActiveItem}
                activeItemIndex={activeItemIndex}
                activePosition={'center'}

                chevronWidth={24}
                rightChevron={'>'}
                leftChevron={'<'}
                outsideChevron={false}
            >
                {children}
            </ItemsCarousel>
        );
    }
}
