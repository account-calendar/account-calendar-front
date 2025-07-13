import CategoryContainer from "@/app/(web)/category/_components/container";
import CategoryTree from "@/widgets/components/category-tree";

const CategoryPage = () => {
  return (
    <main className="px-xl pt-lg pb-4xl flex flex-col gap-y-8xl text-text-strong">
      <CategoryContainer title="지출 카테고리">
        <CategoryTree categories={categories} />
      </CategoryContainer>
      <CategoryContainer title="수입 카테고리">
        <CategoryTree categories={categories} />
      </CategoryContainer>
    </main>
  );
};

export default CategoryPage;

const categories = [
  {
    title: "식비",
    icon: "🍚",
    children: [
      { title: "커피", icon: "☕" },
      { title: "간식", icon: "🍦" },
    ],
  },
  { title: "교통", icon: "🚃" },
];
