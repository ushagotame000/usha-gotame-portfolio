import { axiosInstance } from "@/app/lib/axiosInstance";

export function createCRUD(endpoint: string) {
  return {
    create: (data: any) => axiosInstance.post(`/${endpoint}`, data),
    getAll: () => axiosInstance.get(`/${endpoint}`),
    getById: (id: string) => axiosInstance.get(`/${endpoint}/${id}`),
    update: (id: string, data: any) => axiosInstance.put(`/${endpoint}/${id}`, data),
    remove: (id: string) => axiosInstance.delete(`/${endpoint}/${id}`),
  };
}
