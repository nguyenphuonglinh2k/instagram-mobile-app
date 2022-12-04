import Api from "./api";
import { ApiConstant } from "const";
import StringFormat from "string-format";

export const getJobs = () => Api.get(ApiConstant.GET_JOBS);

export const getJobDetail = jobId =>
  Api.get(StringFormat(ApiConstant.GET_JOBS, { jobId }));

export const getJobsOfCompany = companyId =>
  Api.get(StringFormat(ApiConstant.GET_JOBS_OF_COMPANY, { companyId }));
