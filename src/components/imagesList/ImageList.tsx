import React from 'react';
import './ImageList.styles.css';

import ImageCard from './ImageCard';

interface imageListProps {
    images: Array<object>
}

const ImageList: React.FC<imageListProps> = ({images}) => {
    const imagesToRender = images.map((image: any) => {
        return <ImageCard key={image.id} image={image} />
    })
    return <div className="image-list">{imagesToRender}</div>
}

export default ImageList;