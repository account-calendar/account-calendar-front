import Icon from "@/shared/components/Icon";
import dayjs from "dayjs";

import { SwiperSlide, type SwiperRef } from "swiper/react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

import VerticalSwiper from "@/shared/components/vertical-swiper";
import Button from "@/shared/components/button";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/shared/utils/style";

type MonthPickerProps = {
  selectedMonth: string;
  onMonthChange?: (month: string) => void;
};

const MonthPicker = ({ selectedMonth, onMonthChange }: MonthPickerProps) => {
  const yearSwiperRef = useRef<SwiperRef>(null);
  const monthSwiperRef = useRef<SwiperRef>(null);
  const [selectYear, setSelectYear] = useState(dayjs(selectedMonth).year());
  const [selectMonth, setSelectMonth] = useState(
    dayjs(selectedMonth).month() + 1
  );

  const handleYearChange = (year: number) => {
    setSelectYear(year);
  };
  const handleMonthChange = (month: number) => {
    setSelectMonth(month);
  };

  const handleConfirm = (onClose: () => void) => {
    onMonthChange?.(`${selectYear}-${String(selectMonth).padStart(2, "0")}`);
    onClose();
  };

  useEffect(() => {
    const index = DEFAULT_YEARS.indexOf(selectYear);
    yearSwiperRef.current?.swiper.slideTo(index - 1);
  }, [selectYear]);

  useEffect(() => {
    const index = DEFAULT_MONTH.indexOf(selectMonth);
    monthSwiperRef.current?.swiper.slideTo(index - 1);
  }, [selectMonth]);

  return (
    <Popover className="group">
      {({ open, close }) => (
        <>
          <PopoverButton className="relative flex items-center gap-xs focus:outline-none border-none">
            <span className="text-text-strong typo-h-lg-strong">
              {dayjs(selectedMonth).format("YYYY년 M월")}
            </span>
            <Icon
              icon="CHEVRON_DOWN"
              className="size-2xl text-text-strong transition-all group-data-open:rotate-180"
            />
          </PopoverButton>
          {open && (
            <PopoverPanel
              anchor="bottom"
              className="mt-md p-md w-[156px] bg-bg-tertiary rounded-xl flex flex-col"
            >
              <div className="relative max-h-[116px] flex gap-x-sm flex-1 pb-sm">
                <VerticalSwiper
                  ref={yearSwiperRef}
                  initialSlide={DEFAULT_YEARS.indexOf(selectYear) - 1}
                >
                  {DEFAULT_YEARS.map((year) => (
                    <SwiperSlide key={year}>
                      <button
                        className={cn(
                          "text-text-weak py-sm typo-h-xs-strong w-full cursor-pointer",
                          selectYear === year &&
                            "text-text-strong bg-bg-secondary rounded-lg"
                        )}
                        onClick={() => handleYearChange(year)}
                      >
                        {year}년
                      </button>
                    </SwiperSlide>
                  ))}
                </VerticalSwiper>
                <VerticalSwiper
                  loop
                  ref={monthSwiperRef}
                  initialSlide={DEFAULT_MONTH.indexOf(selectMonth) - 1}
                >
                  {DEFAULT_MONTH.map((month) => (
                    <SwiperSlide key={month} className="text-text-strong">
                      <button
                        className={cn(
                          "text-text-weak p-sm typo-h-xs-strong w-full cursor-pointer",
                          selectMonth === month &&
                            "text-text-strong bg-bg-secondary rounded-lg"
                        )}
                        onClick={() => handleMonthChange(month)}
                      >
                        {month}월
                      </button>
                    </SwiperSlide>
                  ))}
                </VerticalSwiper>
              </div>
              <Button
                variant="primary"
                className="w-full"
                onClick={() => handleConfirm(close)}
              >
                확인
              </Button>
            </PopoverPanel>
          )}
        </>
      )}
    </Popover>
  );
};

export default MonthPicker;

const DEFAULT_YEARS = Array.from(
  { length: 12 },
  (v, i) => i + Number(2025) - 10
);
const DEFAULT_MONTH = Array.from({ length: 12 }, (v, i) => i + 1);
