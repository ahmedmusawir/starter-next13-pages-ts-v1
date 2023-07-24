import * as strapiContactAPI from "./strapi/contacts";
import * as strapiCompanyAPI from "./strapi/company";

interface DataSource {
  getContacts?: () => Promise<strapiContactAPI.ApiResponse>;
  // define any other methods that your datasource may have
}

let datasource: DataSource = {};

if (process.env.DATALAYER_ENGINE === "strapi")
  datasource = { ...strapiCompanyAPI, ...strapiContactAPI };

export default datasource;
