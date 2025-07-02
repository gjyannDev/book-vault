import AuthForm from "@/components/auth/AuthForm";
import { signInSchema } from "@/schemas/auth.schemas";
import type { TSignInSchema } from "@/types/bookTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function SigninPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
    <div className="flex flex-col w-full max-w-md mx-auto my-16 gap-6 md:gap-8">
      <div className="flex flex-col gap-16">
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
        <AuthForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
      </div>
      <p className="font-lora-regular text-xs">
        Don't have an account?{" "}
        <span className="text-[var(--primary-clr)] cursor-pointer">
          <Link to="/signup">Sign up.</Link>
        </span>
      </p>
    </div>
  );
}
