import { useDispatch } from "react-redux";
import { setFilter } from "@/features/users/userSlice";

export const RadioGroupCreditCard = () => {
  const dispatch = useDispatch();
  const cards = [
    {
      id: 1,
      name: "Visa",
      slug: "visa",
    },
    {
      id: 2,
      name: "Master Card",
      slug: "mastercard",
    },
    {
      id: 3,
      name: "JCB",
      slug: "jcb",
    },
    {
      id: 4,
      name: "American Express",
      slug: "americanexpress",
    },
  ];
  const handleCardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("CardTerm in Radio:", event.target.value);

    // For setting a card term
    dispatch(setFilter({ type: "card", value: event.target.value }));
  };

  return (
    <div className="mt-4 border-2 px-5 pb-3">
      <h4 className="">Filter by Credit Cards:</h4>

      {cards?.map((card) => (
        <label key={card.id} className="inline-flex items-center mr-3">
          <input
            type="radio"
            className="form-radio"
            name="filters"
            value={card.slug}
            onChange={handleCardChange}
          />
          <span className="ml-2">{card.name}</span>
        </label>
      ))}
    </div>
  );
};
