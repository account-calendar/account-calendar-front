import loginFormDataResolver from "@/app/_hooks/_validations/login-form-data";
import usePostLogin from "@/services/hooks/auth/use-post-login";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/services/constants/app-routes";

const UseLogin = () => {
  const router = useRouter();
  const { mutate: postLogin, isPending } = usePostLogin();

  const formMethods = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: loginFormDataResolver,
  });

  const { handleSubmit } = formMethods;

  const handleSubmitFormData = handleSubmit((data) => {
    postLogin(
      {
        request: data,
      },
      {
        onSuccess: () => {
          router.push(APP_ROUTES.MAIN);
        },
        onError: () => {
          toast.error("이메일과 비밀번호를 확인해주세요.");
          return;
        },
      }
    );
  });

  return {
    formMethods,
    onSubmit: handleSubmitFormData,
    isPending,
  };
};

export default UseLogin;
