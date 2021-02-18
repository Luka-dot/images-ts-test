import React from 'react';

interface singleImage {
    image: {
        description: string,
        urls: any
    }
}

class ImageCard extends React.Component<singleImage> {
    imageRef: React.RefObject<HTMLImageElement>;
    constructor(props: singleImage) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current?.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current?.clientHeight)
    }

    render() {
        const { description, urls } = this.props.image;

        return (
            <div>
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