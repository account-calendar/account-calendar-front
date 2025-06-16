import { forwardRef } from "react";
import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";
import { Swiper, type SwiperProps, type SwiperRef } from "swiper/react";

type VerticalSwiperProps = SwiperProps;

const VerticalSwiper = forwardRef<SwiperRef, VerticalSwiperProps>(
  ({ children, ...props }, ref) => {
    return (
      <Swiper
        className="flex-1"
        direction="vertical"
        slidesPerView={3}
        mousewheel
        freeMode
        modules={[FreeMode, Mousewheel, Scrollbar]}
        ref={ref}
        {...props}
      >
        {children}
      </Swiper>
    );
  }
);

export default VerticalSwiper;
