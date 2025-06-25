import InputField from "@/entities/components/input-field";
import SelectField from "@/entities/components/select-field";
import TextAreaField from "@/entities/components/text-area-field";
import Button from "@/shared/components/button";
import SubNavigation from "@/widgets/components/navigation/sub";

type BudgetPageProps = {
  params: Promise<{
    date: string;
  }>;
};

const BudgetPage = async ({ params }: BudgetPageProps) => {
  return (
    <>
      <SubNavigation />
      <div className="flex-1 px-xl pt-xl pb-4xl flex flex-col gap-lg">
        <InputField title="금액" required inputOptions={{ type: "number" }} />
        <SelectField title="카테고리-대분류" />
        <SelectField title="카테고리-중분류" />
        <TextAreaField
          title="메모"
          textAreaOptions={{ placeholder: "메모를 입력해주세요." }}
        />
      </div>
      <div className="sticky bottom-[0] p-xl bg-gray-600">
        <Button variant="primary" size="xl" className="w-full">
          등록하기
        </Button>
      </div>
    </>
  );
};

export default BudgetPage;
