import Button from "@/shared/components/button";
import InputField from "@/widgets/components/input-field";

export default function Home() {
  return (
    <main className="mx-auto mt-[300px] text-white w-[430px]">
      <form action="" className="flex flex-col gap-2xl">
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
        <Button className="w-full" size="lg">
          로그인
        </Button>
      </form>
    </main>
  );
}
