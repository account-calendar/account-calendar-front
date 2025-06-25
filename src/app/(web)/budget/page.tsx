import { APP_ROUTES } from "@/services/constants/app-routes";
import { redirect } from "next/navigation";

const Budget = () => {
  redirect(APP_ROUTES.LOGIN);
};

export default Budget;
