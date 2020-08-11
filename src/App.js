import React, { useRef } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { Annotorious } from "@recogito/annotorious";
import List from "./List";
import Tips from "./Tips";

const containerStyle = { display: "flex" };
const noShrinkStyle = { flexShrink: 0 };
const IMG_ID = "mainImage";

function mapAnnotationToRect(annotation) {
  const [x, y, h, w] = annotation.target.selector.value
    .substring(11)
    .split(",")
    .map((s) => parseInt(s));
  const name = annotation.body[0].value;
  return { name, x, y, h, w };
}

function App() {
  const anno = useRef(null);
  const [imgSrc, setImgSrc] = useState("#");
  const [rects, setRects] = useState([]);
  const updateAnnotations = useCallback(
    () =>
      anno.current &&
      setRects(anno.current.getAnnotations().map(mapAnnotationToRect)),
    []
  );
  const onFileLoad = useCallback(
    (event) => {
      setImgSrc(event.target.result);
      if (anno.current) {
        anno.current.destroy();
      }
      setTimeout(function () {
        anno.current = new Annotorious({
          image: IMG_ID,
        });
        anno.current.on("createAnnotation", updateAnnotations);
        anno.current.on("deleteAnnotation", updateAnnotations);
        anno.current.on("updateAnnotation", updateAnnotations);
      }, 500);
    },
    [updateAnnotations]
  );
  const onUpload = useCallback(
    (event) => {
      const reader = new FileReader();
      reader.onload = onFileLoad;
      reader.readAsDataURL(event.target.files[0]);
    },
    [onFileLoad]
  );
  return (
    <div style={containerStyle}>
      <Tips style={noShrinkStyle} />
      <List rects={rects} style={noShrinkStyle} />
      <div>
        <input type="file" onChange={onUpload} />
        <img id={IMG_ID} src={imgSrc} alt="對位圖檔" />
      </div>
    </div>
  );
}

export default App;
