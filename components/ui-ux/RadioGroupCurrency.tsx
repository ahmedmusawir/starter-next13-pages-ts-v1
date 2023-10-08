import { useDispatch } from "react-redux";
import { setFilter } from "@/features/users/userSlice";

export const RadioGroupCurrency = () => {
  const dispatch = useDispatch();
  const currencies = [
    {
      id: 1,
      name: "Dollar",
      slug: "dollar",
    },
    {
      id: 2,
      name: "Euro",
      slug: "euro",
    },
    {
      id: 3,
      name: "Peso",
      slug: "peso",
    },
    {
      id: 4,
      name: "Rial",
      slug: "rial",
    },

    {
      id: 5,
      name: "Ringgit",
      slug: "ringgit",
    },
  ];
  const handleCurrencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("CurrencyTerm in Radio:", event.target.value);

    // For setting a currency term
    dispatch(setFilter({ type: "currency", value: event.target.value }));
  };

  return (
    <div className="mt-4 border-2 px-5">
      <h4 className="">Filter by Currency:</h4>

      {currencies?.map((currency) => (
        <label key={currency.id} className="inline-flex items-center mr-3">
          <input
            type="radio"
            className="form-radio"
            name="filters"
            value={currency.name}
            onChange={handleCurrencyChange}
          />
          <span className="ml-2">{currency.name}</span>
        </label>
      ))}
    </div>
  );
};
