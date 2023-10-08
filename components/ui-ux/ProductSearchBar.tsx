import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "@/features/products/productSlice";
import { RootState } from "@/global-interfaces";

export const ProductSearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(
    (state: RootState) => state.product.searchTerm
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
          placeholder="Search for a product..."
        />
      </div>
    </div>
  );
};
