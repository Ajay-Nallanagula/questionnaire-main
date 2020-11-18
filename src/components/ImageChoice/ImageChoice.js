import React, { useState } from "react";
import ImagePicker from "react-image-picker";
//import "react-image-picker/dist/index.css";

import img1 from "../../assets/kitten/200.jpg";
import img2 from "../../assets/kitten/201.jpg";
import img3 from "../../assets/kitten/202.jpg";
import img4 from "../../assets/kitten/203.jpg";

import { formatImageList } from "./ImageChoiceUtils";

const imageList = [img1, img2, img3, img4];

const ImageChoice = ({setImage}) => {
  const formattedImages = formatImageList(imageList);
  return (
    <div >
      <ImagePicker style={{width: '50%',margin: 'auto'}}
        images={formattedImages}
        onPick={(image) => setImage(image)}
      />
    </div>
  );
};

export default ImageChoice;
