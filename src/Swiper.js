import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const slides = [
  { type: "question", src: "path_to_question1.jpg" },
  { type: "answer", src: "path_to_answer1.jpg" },
];

function SlideViewer() {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide.src} alt={slide.type} />
          {slide.type === "answer" && (
            <div>
              <button>Correct</button>
              <button>Wrong</button>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default SlideViewer;
