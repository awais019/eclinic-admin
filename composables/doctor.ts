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

  return {
    getAll,
  };
};
