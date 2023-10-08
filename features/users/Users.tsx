import { User } from "@/global-interfaces";
import { BanknotesIcon, CreditCardIcon } from "@heroicons/react/20/solid";

export default function Users({ people }: { people: User[] }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {people?.map((person) => (
        <li
          key={person.id}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img
              className="mx-auto h-32 w-32 flex-shrink-0 rounded-full border-8 border-indigo-200"
              src={person.image}
              alt=""
            />
            <h3 className="mt-6 text-lg font-medium text-gray-900">
              {person.firstName} {person.lastName}
            </h3>
            <h1>
              <span className="inline-flex items-center rounded-full bg-purple-100 px-8 py-4 text-md font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                {person.username}
              </span>
            </h1>
            <h3 className="mt-5 text-xl font-medium text-gray-900">
              {person.university}
            </h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">
                {person.address.city}, {person.address.state}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-md font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {person.gender}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <CreditCardIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  {person.bank.cardType.toUpperCase()}
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${person.phone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <BanknotesIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  {person.bank.currency}
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
