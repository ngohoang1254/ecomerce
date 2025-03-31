"use client"
import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";

type ImageZoomProps = {
    imageSrc: string;
    imageWidth?: number;
    imageHeight?: number;
    zoomWidth?: number;
    zoomHeight?: number;
};

const ImageZoom: React.FC<ImageZoomProps> = ({
    imageSrc,
    imageWidth = 400,
    imageHeight = 300,
    zoomWidth = 800,
    zoomHeight = 600,
}) => {

    return (
        <div style={{ width: "100%" }}>
            <ReactImageMagnify
                {...{
                    smallImage: {
                        alt: "Zoomable Image",
                        isFluidWidth: true,
                        src: imageSrc,
                    },
                    largeImage: {
                        src: imageSrc,
                        width: zoomWidth,
                        height: zoomHeight,
                    },

                    enlargedImageContainerStyle: { background: "#fff" },
                    enlargedImagePosition: "beside",
                    lensZoomMultiplier: 3, // Điều chỉnh độ nhạy zoom khi cuộn chuột
                }}
            />
        </div>
    );
};

export default ImageZoom;