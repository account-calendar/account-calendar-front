import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const changeNameFormDataSchema = z.object({
  name: z.string().nonempty({ message: "이름을 입력해주세요." }),
});

export type ChangeNameFormData = z.infer<typeof changeNameFormDataSchema>;

const changeNameFormDataResolver = zodResolver(changeNameFormDataSchema);

export default changeNameFormDataResolver;
