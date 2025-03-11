import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

interface Payload {
  login: string;
  password: string;
}
const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (payload: Payload) => {
      await axiosInstance.post("/users/login", {
        login: payload.login,
        password: payload.password,
      });
    },
    onSuccess: () => {
      alert("Login berhasil");
      router.push("/");
    },
    onError: (error: AxiosError<{ message: string; code: number }>) => {
      alert(error.response?.data.message);
    },
  });
};

export default useLogin;
