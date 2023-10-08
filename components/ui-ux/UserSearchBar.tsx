import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "@/features/users/userSlice";
import { RootState } from "@/global-interfaces";

export const UserSearchBar = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.user.filter);
  const searchTerm = filter.type === "search" ? filter.value : "";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // For setting a search term
    dispatch(setFilter({ type: "search", value: event.target.value }));
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2 mx-2">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
          placeholder="Search for Clients..."
        />
      </div>
    </div>
  );
};
