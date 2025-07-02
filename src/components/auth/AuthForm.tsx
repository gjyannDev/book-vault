import { errorHintText } from "@/components/shared/classNames";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { AuthFormProps } from "@/types/bookTypes";
import clsx from "clsx";

export default function AuthForm({
  handleSubmit,
  onSubmit,
  register,
  errors,
  isSubmitting,
  formType,
}: AuthFormProps) {
  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 md:gap-10"
      >
        <div className="flex flex-col gap-6 md:gap-7">
          <div className="flex flex-col gap-2">
            <Label className="font-playfair-bold">Email</Label>
            <Input type="email" {...register("email")} />
            {errors.email && (
              <p className={errorHintText}>{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-playfair-bold">Password</Label>
            <Input type="password" {...register("password")} />
            {errors.password && (
              <p className={errorHintText}>{errors.password.message}</p>
            )}
          </div>
        </div>
        <Button
          className={clsx(
            "roundex-xs",
            "md:w-[9.75rem] md:items-start md:rounded-md"
          )}
          type="submit"
        >
          {formType == "sign in" ? "Sign in" : "Sign up"}
        </Button>
      </form>
    </div>
  );
}
