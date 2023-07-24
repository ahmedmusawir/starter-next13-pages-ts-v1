// Import your APIs directly
import {
  getContacts,
  ApiResponse as ContactApiResponse,
} from "./strapi/contacts";
// import { getCompanies, ApiResponse as CompanyApiResponse } from './strapi/company';

// Define the DataSource interface
export interface DataSource {
  getContacts: () => Promise<ContactApiResponse>;
  // getCompanies: () => Promise<CompanyApiResponse>;
}

// Directly create a datasource object with your APIs
const datasource: DataSource = {
  getContacts,
  // getCompanies,
};

export default datasource;
