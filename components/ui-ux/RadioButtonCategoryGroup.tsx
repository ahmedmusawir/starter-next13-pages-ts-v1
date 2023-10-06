import { useDispatch } from "react-redux";
import { setCategoryTerm } from "@/features/products/productSlice";
import { useGetCategoriesQuery } from "@/features/products/apiProducts";

export const RadioButtonCategoryGroup = () => {
  const dispatch = useDispatch();
  const { data: categories } = useGetCategoriesQuery({});

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCategoryTerm(event.target.value));
  };

  return (
    <div className="mt-4">
      {categories?.map((category: string[], index: number) => (
        <label key={index} className="inline-flex items-center mr-3">
          <input
            type="radio"
            className="form-radio"
            name="category"
            value={category}
            onChange={handleCategoryChange}
          />
          <span className="ml-2">{category}</span>
        </label>
      ))}
    </div>
  );
};
