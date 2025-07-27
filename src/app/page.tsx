"use client";

import Button from "@/shared/components/button";
import InputField from "@/entities/components/input-field";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/services/constants/app-routes";
import { useState } from "react";
import usePostLogin from "@/services/hooks/auth/use-post-login";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: postLogin } = usePostLogin();

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postLogin(
      { request: { email, password } },
      {
        onSuccess: () => {
          router.push(APP_ROUTES.MAIN);
        },
      }
    );
  };

  return (
    <main className="mt-[300px] text-white px-xl">
      <form className="flex flex-col gap-2xl" onSubmit={handleSubmit}>
        <InputField
          title="아이디"
          required
          inputOptions={{
            placeholder: "아이디",
            value: email,
            onChange: (e) => setEmail(e.target.value),
          }}
        />
        <InputField
          title="비밀번호"
          required
          inputOptions={{
            placeholder: "비밀번호",
            value: password,
            onChange: (e) => setPassword(e.target.value),
          }}
        />
        <Button className="w-full" size="lg" type="submit">
          로그인
        </Button>
      </form>
    </main>
  );
}
