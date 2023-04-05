// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 项目列表 GET /api/project */
export async function queryAllApiProjectGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryAllApiProjectGetParams,
  options?: { [key: string]: any },
) {
  return request<API.Project_>('/api/project', {
    method: 'GET',
    params: {
      // current has a default value: 1
      current: '1',
      // pageSize has a default value: 10
      pageSize: '10',
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增项目 POST /api/project */
export async function createApiProjectPost(
  body: API.ProjectCreate,
  options?: { [key: string]: any },
) {
  return request<API.RProject_>('/api/project', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改项目 PUT /api/project/${param0} */
export async function updateApiProject_pk_put(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateApiProjectPkPutParams,
  body: API.ProjectUpdate,
  options?: { [key: string]: any },
) {
  const { pk: param0, ...queryParams } = params;
  return request<API.RProject_>(`/api/project/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除项目 DELETE /api/project/${param0} */
export async function deleteApiProject_pk_delete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteApiProjectPkDeleteParams,
  options?: { [key: string]: any },
) {
  const { pk: param0, ...queryParams } = params;
  return request<API.R>(`/api/project/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
