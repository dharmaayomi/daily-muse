import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

interface Payload {
  firstName: string;
  email: string;
  lastName: string;
  password: string;
}

const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (payload: Payload) => {
      await axiosInstance.post("/users/register", {
        firstName: payload.firstName,
        email: payload.email,
        lastName: payload.lastName,
        password: payload.password,
      });
    },
    onSuccess: () => {
      alert("register berhasil");
      router.push("/login");
    },
    onError: (error: AxiosError<{ message: string; code: number }>) => {
      console.log(error);
      alert(error.response?.data.message);
    },
  });
};

export default useRegister;
