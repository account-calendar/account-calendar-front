import useDisclosure from "@/shared/hooks/use-disclosure";
import { useState } from "react";

const useMainCalendarManager = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const modalManager = useDisclosure();

  const { onOpen, onClose } = modalManager;

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onOpen();
  };

  const handleCloseBudgetModal = () => {
    setSelectedDate(undefined);
    onClose();
  };

  return {
    modalManager,
    selectedDate,
    onDateClick: handleDateClick,
    onCloseBudgetModal: handleCloseBudgetModal,
  };
};

export default useMainCalendarManager;
