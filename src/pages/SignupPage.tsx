import AuthForm from "@/components/auth/AuthForm";
import { signInSchema } from "@/schemas/auth.schemas";
import { createNewUser } from "@/services/api/auth/auth.api";
import type { TSignInSchema } from "@/types/authTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });
  const navigate = useNavigate();

  async function onSubmit(data: TSignInSchema) {
    const res = await createNewUser({
      email: data.email,
      password: data.password,
    });

    if (!res.success) {
      setError(res.field, { type: "manual", message: res.message });
      console.log(res.message);
      return;
    }

    reset();
    navigate("/");
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
          isSubmitting={isSubmitting}
          formType="sign up"
        />
      </div>
      <p className="font-lora-regular text-xs">
        Already have an account?{" "}
        <span className="text-[var(--primary-clr)] cursor-pointer">
          <Link to="/signin">Sign in.</Link>
        </span>
      </p>
    </div>
  );
}
