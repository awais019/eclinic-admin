import useUserStore from "~/stores/user";
import type { DoctorAll } from "~/types/user";

export const useDoctor = () => {
  const { baseURL } = useRuntimeConfig().public;

  function getAll() {
    const { token } = useUserStore();

    return useFetch<{
      data: {
        doctors: DoctorAll[];
      };
      message: string;
    }>("/admin/doctors", {
      headers: {
        "x-auth-token": token,
      },
      baseURL,
    });
  }

  function get(id: string) {
    const { token } = useUserStore();

    return useFetch<{
      data: Doctor;
      message: string;
    }>(`/admin/doctors/${id}`, {
      headers: {
        "x-auth-token": token,
      },
      baseURL,
    });
  }

  return {
    getAll,
    get,
  };
};
