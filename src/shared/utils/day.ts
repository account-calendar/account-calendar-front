export const getMonthDays = (targetMonth: string) => {
  const [year, month] = targetMonth.split("-").map(Number);

  const lastDay = new Date(year, month, 0).getDate();
  const firstDayOfWeek = new Date(year, month - 1, 1).getDay();
  const lastDayOfWeek = new Date(year, month - 1, lastDay).getDay();

  // 이전 달의 마지막 날짜 구하기
  const prevMonthLastDay = new Date(year, month - 1, 0).getDate();

  // 이전 달의 표시할 날짜 수 계산
  const prevMonthDays = firstDayOfWeek;

  // 다음 달의 표시할 날짜 수 계산
  const nextMonthDays = lastDayOfWeek === 6 ? 0 : 6 - lastDayOfWeek;

  const days = Array.from(
    { length: prevMonthDays + lastDay + nextMonthDays },
    (_, i) => {
      if (i < prevMonthDays) {
        return `${month === 1 ? year - 1 : year}-${String(
          month === 1 ? 12 : month - 1
        ).padStart(2, "0")}-${String(
          prevMonthLastDay - prevMonthDays + i + 1
        ).padStart(2, "0")}`;
      }
      if (i >= prevMonthDays && i < prevMonthDays + lastDay) {
        return `${year}-${String(month).padStart(2, "0")}-${String(
          i - prevMonthDays + 1
        ).padStart(2, "0")}`;
      }
      return `${month === 12 ? year + 1 : year}-${String(
        month === 12 ? 1 : month + 1
      ).padStart(2, "0")}-${String(i - prevMonthDays - lastDay + 1).padStart(
        2,
        "0"
      )}`;
    }
  );

  return days;
};
