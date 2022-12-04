import Api from "./api";
import { ApiConstant } from "const";
import StringFormat from "string-format";

export const getCompanyDetail = companyId =>
  Api.get(StringFormat(ApiConstant.GET_COMPANY_DETAIL, { companyId }));
