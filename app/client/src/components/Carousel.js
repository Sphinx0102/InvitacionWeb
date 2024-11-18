import React, { useRef, useEffect } from "react";
import { renderToString } from 'react-dom/server'
import { Autoplay } from "@fancyapps/ui/dist/carousel.autoplay.esm.js";
import { Carousel as NativeCarousel } from "@fancyapps/ui/dist/carousel.esm.js";
import "@fancyapps/ui/dist/carousel.css";
NativeCarousel.Plugins.Autoplay = Autoplay;


function ReactCarousel(props) {
  const wrapper = useRef(null);

  useEffect(() => {
    const items = props.items || [];
    const opts = props.options || {};

    opts.slides = [...items].map((val) => {
      const htmlString = renderToString(val);
      return { html: htmlString };
    });

    const instance = new NativeCarousel(wrapper.current, opts);

    return () => {
      instance.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`carousel ${props.className || ""}`} ref={wrapper}>
    </div>
  );
}

export default ReactCarousel;
