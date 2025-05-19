"use client";

import useChangeNameFormData from "@/app/my/_hooks/use-change-name-form-data";
import { Controller, FormProvider } from "react-hook-form";

const MyPage = () => {
  const { formMethods, onSubmit } = useChangeNameFormData();
  const { control } = formMethods;

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={onSubmit}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => <input {...field} />}
        />
        <button type="submit">변경</button>
      </form>
    </FormProvider>
  );
};

export default MyPage;
