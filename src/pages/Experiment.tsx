import React, {
  CSSProperties,
  Component,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import windowImg from "../../assets/images/window2.jpg";
import windowImgPreload from "../../assets/images/window2-min.jpg";

interface ExperimentProps {}
const height = window.innerHeight;
const h2 = height * 2;
const width = window.innerWidth;
const Experiment: React.FC<ExperimentProps> = ({}) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const setSize = (ele: HTMLElement) => {
    console.log(window.scrollY - ele.offsetTop);
    if (imgRef.current) {
      imgRef.current.style.width = `${
        window.scrollY - ele.offsetTop + width
      }px`;
      imgRef.current.style.height = `${
        window.scrollY - ele.offsetTop + height
      }px`;
    }
  };

  useEffect(() => {
    const div = document.getElementById("wrapper");

    if (imgRef.current) {
      imgRef.current.style.minWidth = `${width}px`;
      imgRef.current.style.minHeight = `${height}px`;
      imgRef.current.style.width = `${width}px`;
      imgRef.current.style.height = `${height}px`;
    }
    window.removeEventListener("scroll", () => {});
    window.addEventListener("scroll", () => {
      if (div != null) {
        setSize(div);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div style={{ width, height: `${height * 3}px`, overflowX: "hidden" }}>
      <div id="wrapper" style={wrapperStyle}>
        <img ref={imgRef} src={windowImg} style={imgStyle} />
      </div>
    </div>
  );
};

export default Experiment;

const wrapperStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  overflow: "auto",
  height,
  width,
};

const imgStyle: CSSProperties = {
  position: "fixed",

  // alignSelf: "center",
};

// window Photo by Jeffrey Czum: https://www.pexels.com/photo/window-view-of-sea-during-golden-hour-2733955/
// window2 Photo by Satoshi Hirayama: https://www.pexels.com/photo/opened-window-1576405/
// #0d1611

// const [scrollTop, setScrollTop] = useState(0);

//   function normalize(value: number, maxValue: number) {
//     return ((value - 0) / (maxValue - 0)) * 100;
//   }
//   const scrollOffset = useRef(0);

//   const onScroll = (e: Event) => {

//     let scroll;
//     scrollOffset.current = normalize(document.body.scrollTop, 2000);
//     console.log(scrollOffset.current);
//   };

// const initialWidth = window.innerWidth;
// const initialHeight = window.innerHeight;

// let maxWidth = initialWidth * 2;
// let maxHeight = initialHeight * 2;

// const growthAmount = 10;
