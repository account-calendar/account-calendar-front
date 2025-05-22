"use client";

import changeNameFormDataResolver from "@/app/my/_validations/change-name-form-data";
import usePatchMyName from "@/services/hooks/user/use-patch-my-name";
import { useForm } from "react-hook-form";

const useChangeNameFormData = () => {
  const { mutate } = usePatchMyName();

  const formMethods = useForm({
    mode: "all",
    defaultValues: {
      name: "",
    },
    resolver: changeNameFormDataResolver,
  });

  const { setError, handleSubmit } = formMethods;

  const handleSubmitFormData = handleSubmit((data) => {
    mutate(
      {
        params: {
          id: data.name,
        },
        request: data,
      },
      {
        onSuccess: () => {},
        onError: (error) => {
          setError("name", {
            type: "manual",
            message: "이름 변경 중 오류가 발생했습니다.",
          });
          return;
        },
      }
    );
  });

  return {
    formMethods,
    onSubmit: handleSubmitFormData,
  };
};

export default useChangeNameFormData;
