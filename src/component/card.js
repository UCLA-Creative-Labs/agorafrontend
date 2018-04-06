import React from 'react';
import Img from "component/image";

const Card = ({
  size,
  square,
  restrictWidth,
  restrictHeight,
  center,
  background,
  preview,
  imgHeight,
  imgWidth,
  titleBar,
  title,
  children,
  bar,
  barRight
}) => {
  let k = ["card"];
  if (size) {
    switch (size) {
      case "sm":
      case "md":
      case "lg":
        k.push(size);
      default:
        k.push("sm");
    }
  }

  if (center) {
    k.push("center");
  }

  if (square) {
    k.push("restrict-width");
    k.push("restrict-height");
  } else if (restrictWidth) {
    k.push("restrict-width");
  } else if (restrictHeight) {
    k.push("restrict-height");
  }

  let titleclass = "title";
  if (titleBar) {
    titleclass = "title-bar";
    k.push("accent");
  }

  return (
    <div className={k.join(" ")}>
      {(title || title === "") && (
        <div className={titleclass}>
          {!titleBar && (
            <Img
              className="card-title-image"
              size={size && "fill"}
              src={background}
              preview={preview}
              imgHeight={imgHeight}
              imgWidth={imgWidth}
            >
              <div className="title-inner">{title}</div>
            </Img>
          )}
          {titleBar && <div className="title-inner">{title}</div>}
        </div>
      )}
      <div className="body">{children}</div>
      {(bar || barRight) && (
        <div className="bar">
          <div className="subbar left">{bar}</div>
          <div className="subbar right">{barRight}</div>
        </div>
      )}
    </div>
  );
};

export default Card;
