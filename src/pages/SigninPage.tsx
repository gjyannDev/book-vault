import { errorHintText } from "@/components/shared/classNames";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInSchema } from "@/schemas/auth.schemas";
import type { TSignInSchema } from "@/types/bookTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useForm } from "react-hook-form";

export default function SigninPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    reset,
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  function onSubmit(data: TSignInSchema) {
    console.log("data submitted: ", data);
    //it reset after submitting
    reset();
  }

  return (
    <div className="flex flex-col w-full max-w-md mx-auto gap-12 my-16">
      <div className="md:flex md:flex-col md:gap-2">
        <h1
          className={clsx(
            "font-playfair-bold text-3xl",
            "md:text-4xl",
            "xl:text-[2.5rem]"
          )}
        >
          Create your account
        </h1>
        <p className="font-lora-regular text-sm xl:text-base">
          Please enter your details.
        </p>
      </div>
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
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}
