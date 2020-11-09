import React, { useState } from 'react';
import MultiImageInput from 'react-multiple-image-input';

const ImageUpload = () => {
    const crop = {
        unit: '%',
        aspect: 4 / 3,
        width: '100'
    };

    const [images, setImages] = useState({});

    return (
        <div>
            Image
            <MultiImageInput
            images={images}
            setImages={setImages}
            cropConfig={{ crop, ruleOfThirds: true }}
            theme="light" 
            />
        </div>
    );
};

export default ImageUpload;