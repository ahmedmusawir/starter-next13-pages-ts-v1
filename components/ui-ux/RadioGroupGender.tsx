import { useDispatch } from "react-redux";
import { setFilter } from "@/features/users/userSlice";

export const RadioGroupGender = () => {
  const dispatch = useDispatch();
  const genders = [
    {
      id: 1,
      name: "Male",
      slug: "male",
    },
    {
      id: 2,
      name: "Female",
      slug: "female",
    },
  ];
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("GenderTerm in Radio:", event.target.value);

    // For setting a gender term
    dispatch(setFilter({ type: "gender", value: event.target.value }));
  };

  return (
    <div className="mt-4 border-2 px-5">
      <h4 className="">Filter by Gender:</h4>
      {genders?.map((gender) => (
        <label key={gender.id} className="inline-flex items-center mr-3">
          <input
            type="radio"
            className="form-radio"
            name="filters"
            value={gender.slug}
            onChange={handleGenderChange}
          />
          <span className="ml-2">{gender.name}</span>
        </label>
      ))}
    </div>
  );
};
