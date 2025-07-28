import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginFormDataSchema = z.object({
  email: z.string().nonempty({ message: "이메일을 입력해주세요." }),
  password: z.string().nonempty({ message: "비밀번호를 입력해주세요." }),
});

const loginFormDataResolver = zodResolver(loginFormDataSchema);

export default loginFormDataResolver;
