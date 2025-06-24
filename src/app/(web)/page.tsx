"use client";

import Button from "@/shared/components/button";
import InputField from "@/entities/components/input-field";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/main");
  };

  return (
    <main className="mt-[300px] text-white px-xl">
      <form className="flex flex-col gap-2xl" onSubmit={handleSubmit}>
        <InputField
          title="아이디"
          required
          inputOptions={{ placeholder: "아이디" }}
        />
        <InputField
          title="비밀번호"
          required
          inputOptions={{ placeholder: "비밀번호" }}
        />
        <Button className="w-full" size="lg" type="submit">
          로그인
        </Button>
      </form>
    </main>
  );
}
