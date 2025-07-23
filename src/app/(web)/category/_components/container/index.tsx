"use client";

import Button from "@/shared/components/button";
import useMajorCategoryCreateModalManager from "@/widgets/hooks/use-major-category-create-modal-manager";

type CategoryContainerProps = {
  title: string;
  children: React.ReactNode;
};

const CategoryContainer = ({ title, children }: CategoryContainerProps) => {
  const { onOpenMajorCategoryCreateModal } =
    useMajorCategoryCreateModalManager();

  return (
    <div className="flex flex-col gap-y-lg">
      <div className="flex items-center gap-x-lg">
        <span className="typo-h-lg-strong">{title}</span>
        <Button
          variant="text"
          size="xs"
          className="h-[40px]"
          iconOption={{ icon: "PLUS" }}
          onClick={onOpenMajorCategoryCreateModal}
        >
          대분류 추가하기
        </Button>
      </div>
      {children}
    </div>
  );
};

export default CategoryContainer;
