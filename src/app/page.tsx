"use client";

import Button from "@/shared/components/button";
import InputField from "@/entities/components/input-field";
import useLogin from "@/app/_hooks/use-login";
import { Controller, FormProvider } from "react-hook-form";

export default function Home() {
  const { onSubmit, formMethods, isPending } = useLogin();

  const { control } = formMethods;

  return (
    <main className="mt-[300px] text-white px-xl">
      <FormProvider {...formMethods}>
        <form className="flex flex-col gap-2xl" onSubmit={onSubmit}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <InputField
                title="아이디"
                required
                inputOptions={{
                  placeholder: "아이디",
                  ...field,
                }}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <InputField
                title="비밀번호"
                required
                inputOptions={{
                  placeholder: "비밀번호",
                  ...field,
                }}
              />
            )}
          />
          <Button
            className="w-full"
            size="lg"
            type="submit"
            disabled={isPending}
          >
            로그인
          </Button>
        </form>
      </FormProvider>
    </main>
  );
}
