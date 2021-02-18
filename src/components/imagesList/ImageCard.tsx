import React from 'react';

interface singleImage {
    image: {
        description: string,
        urls: any
    }
}

type MyState = { spans: number };

class ImageCard extends React.Component<singleImage, MyState> {
    imageRef: React.RefObject<HTMLImageElement>;
    constructor(props: singleImage) {
        super(props);

        this.state = { spans: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current?.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height: any = this.imageRef.current?.clientHeight;

        const spans = Math.ceil(height / 10 );

        this.setState({ spans: spans })
    }

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }} >
                <img 
                    className="image-card"
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
};

export default ImageCard;