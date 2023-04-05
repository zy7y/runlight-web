declare namespace API {
  type deleteApiProjectPkDeleteParams = {
    pk: number;
  };

  type HTTPValidationError = {
    /** Detail */
    detail?: ValidationError[];
  };

  type Project = {
    /** Name */
    name: string;
    /** Description */
    description?: string;
    /** Id */
    id: number;
    /** Createdat */
    createdAt: string;
    /** Updatedat */
    updatedAt: string;
  };

  type Project_ = {
    /** Code */
    code?: number;
    /** Message */
    message?: string;
    /** Data */
    data: Project[];
    /** Total */
    total: number;
  };

  type ProjectCreate = {
    /** Name */
    name: string;
    /** Description */
    description?: string;
  };

  type ProjectUpdate = {
    /** Name */
    name: string;
    /** Description */
    description?: string;
  };

  type queryAllApiProjectGetParams = {
    current?: number;
    pageSize?: number;
    projectName?: string;
  };

  type R = {
    /** Code */
    code?: number;
    /** Message */
    message?: string;
    /** Data */
    data?: any;
  };

  type RProject_ = {
    /** Code */
    code?: number;
    /** Message */
    message?: string;
    data: Project;
  };

  type updateApiProjectPkPutParams = {
    pk: number;
  };

  type ValidationError = {
    /** Location */
    loc: any[];
    /** Message */
    msg: string;
    /** Error Type */
    type: string;
  };
}
