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
        <div className="container pt-3">
            <h3>Upload your images</h3>
            <MultiImageInput
                max={5}
                images={images}
                setImages={setImages}
                allowCrop={false}
                cropConfig={{ crop, ruleOfThirds: true }}
                theme="light"
            />
        </div>
    );
};

export default ImageUpload;