import MajorCategory from "@/widgets/components/category-tree/_components/major-category";
import MiddleCategory from "@/widgets/components/category-tree/_components/middle-category";

type Category = {
  title: string;
  icon?: string;
};

type MajorCategory = Category & {
  children?: Category[];
};

type CategoryTreeProps = {
  categories: MajorCategory[];
};

const CategoryTree = ({ categories }: CategoryTreeProps) => {
  return (
    <div>
      {categories.map((category) => (
        <MajorCategory key={category.title} {...category}>
          {category.children &&
            category.children.map((child) => (
              <MiddleCategory key={child.title} {...child} />
            ))}
        </MajorCategory>
      ))}
    </div>
  );
};

export default CategoryTree;
