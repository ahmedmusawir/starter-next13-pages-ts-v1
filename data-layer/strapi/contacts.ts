import axios from "../apiClient";
import qs from "qs";

// import { companyReducer } from './utils';

const apiUrl = process.env.STRAPI_API_BASE_URL;

interface Locations {
  locationIds: string[];
}

export interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  roles: {
    id: number;
    type: string;
    role: string;
    locations: Locations;
  };
}

export interface ContactData {
  id: number;
  attributes: Contact;
}

export interface ContactSingleData {
  data: {
    id: number;
    attributes: Contact;
  };
  meta: object;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ApiResponse {
  data: ContactData[];
  meta: {
    pagination: Pagination;
  };
}

export const getContacts = async (): Promise<ApiResponse> => {
  const query = qs.stringify(
    {
      populate: ["roles"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${apiUrl}/contacts?${query}`);
  const rawCompanies = res.data.data;
  return rawCompanies;
};
