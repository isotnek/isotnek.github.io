import React from 'react';
import ReactMarkdown from 'react-markdown';

const InlineImage = ({ src, alt, children, position = "left", size = '50px' }) => {
    const imageStyles = {
        verticalAlign: 'middle',
        marginRight: position === "left" ? '1rem' : 0,
        marginLeft: position === "right" ? '1rem' : 0,
        width: size,
        height: size,
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {position === "left" && <img src={src} alt={alt} style={imageStyles} className="inline-image" />}
            <ReactMarkdown>{children}</ReactMarkdown>
            {position === "right" && <img src={src} alt={alt} style={imageStyles} className="inline-image" />}
        </div>
    );
};

export default InlineImage;
