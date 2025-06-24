interface ProgressBarProps {
  max?: number;
  current?: number;
}

const ProgressBar = ({ max = 0, current = 0 }: ProgressBarProps) => {
  const percentage = max > 0 ? Math.min((current / max) * 100, 100) : 0;

  const getProgressColor = (percent: number) => {
    if (percent < 50) {
      return "bg-bg-primary";
    } else if (percent >= 50 && percent < 80) {
      return "bg-bg-warning-strong";
    } else {
      return "bg-bg-danger-strong";
    }
  };

  return (
    <div className="flex flex-col">
      <div className="h-[6px] bg-bg-base-normal rounded-full mb-xs">
        <div
          className={`h-full ${getProgressColor(
            percentage
          )} rounded-full transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-text-weak typo-bd-sm-normal self-end">
        {max > 0
          ? `${current.toLocaleString()} / ${max.toLocaleString()}`
          : "0"}
      </span>
    </div>
  );
};

export default ProgressBar;
