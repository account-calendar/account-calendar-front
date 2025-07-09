"use client";

import { useState } from "react";
import InputField from "@/entities/components/input-field";
import SelectField from "@/entities/components/select-field";
import TextAreaField from "@/entities/components/text-area-field";
import Button from "@/shared/components/button";
import Field from "@/shared/components/field";
import RadioButton from "@/shared/components/radio-button";
import SubNavigation from "@/widgets/components/navigation/sub";
import { useParams } from "next/navigation";

const BudgetPage = () => {
  const { date } = useParams<{ date: string }>();

  const [budgetType, setBudgetType] = useState("income");

  return (
    <>
      <SubNavigation />
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
        <InputField title="금액" required inputOptions={{ type: "number" }} />
        <SelectField title="카테고리-대분류" />
        <SelectField title="카테고리-중분류" />
        <TextAreaField
          title="메모"
          textAreaOptions={{ placeholder: "메모를 입력해주세요." }}
        />
      </div>
      <div className="p-xl bg-gray-600">
        <Button variant="primary" size="xl" className="w-full">
          등록하기
        </Button>
      </div>
    </>
  );
};

export default BudgetPage;

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
