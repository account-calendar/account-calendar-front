import InputField from "@/entities/components/input-field";
import SelectField from "@/entities/components/select-field";
import TextAreaField from "@/entities/components/text-area-field";
import { APP_ROUTES } from "@/services/constants/app-routes";
import Button from "@/shared/components/button";
import Field from "@/shared/components/field";
import FullModal from "@/shared/components/full-modal";
import RadioButton from "@/shared/components/radio-button";
import useMajorCategorySelectModalManager from "@/widgets/hooks/use-major-category-select-modal-manager";
import useMiddleCategorySelectModalManager from "@/widgets/hooks/use-middle-category-select-modal-manager";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

type TransactionsProps = {
  open: boolean;
  onClose: () => void;
  date: string;
};

const Transactions = ({ open, onClose, date }: TransactionsProps) => {
  const { onOpenMajorCategorySelectModal } =
    useMajorCategorySelectModalManager();
  const { onOpenMiddleCategorySelectModal } =
    useMiddleCategorySelectModalManager();
  const router = useRouter();
  const [value, setValue] = useState("");
  const title = dayjs(date).format("M월 D일");

  const [budgetType, setBudgetType] = useState("income");

  const handleConfirm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onClose();
    router.push(APP_ROUTES.MAIN);
  };

  const handleOpenMajorCategorySelectModal = () => {
    onOpenMajorCategorySelectModal(() => {
      console.log("카테고리 추가");
    });
  };

  const handleOpenMiddleCategorySelectModal = () => {
    onOpenMiddleCategorySelectModal(() => {
      console.log("카테고리 추가");
    });
  };

  return (
    <FullModal open={open} onClose={onClose} title={title}>
      <form onSubmit={handleConfirm}>
        <div className="px-xl pt-xl pb-4xl flex flex-col gap-lg">
          <Field title="기록유형">
            <div className="flex gap-x-sm">
              {BUDGET_TYPES.map((el) => (
                <RadioButton
                  key={el.value}
                  className="flex-1"
                  selected={el.value === budgetType}
                  onClick={() => setBudgetType(el.value)}
                >
                  {el.label}
                </RadioButton>
              ))}
            </div>
          </Field>
          <InputField
            title="금액"
            required
            inputOptions={{
              type: "number",
              placeholder: "금액을 입력해주세요.",
              unit: "₩",
              value,
              onChange: (e) => setValue(e.target.value),
            }}
          />
          <SelectField
            title="카테고리-대분류"
            selectOptions={{
              placeholder: "해당없음",
              iconString: "❎",
              onClick: handleOpenMajorCategorySelectModal,
            }}
          />
          <SelectField
            title="카테고리-중분류"
            selectOptions={{
              placeholder: "해당없음",
              iconString: "❎",
              onClick: handleOpenMiddleCategorySelectModal,
            }}
          />
          <TextAreaField
            title="메모"
            textAreaOptions={{ placeholder: "메모를 입력해주세요." }}
          />
        </div>
        <div className="p-xl bg-gray-600">
          <Button variant="primary" size="xl" className="w-full" type="submit">
            등록하기
          </Button>
        </div>
      </form>
    </FullModal>
  );
};

export default Transactions;

const BUDGET_TYPES = [
  {
    value: "income",
    label: "수입",
  },
  {
    value: "expense",
    label: "지출",
  },
];
