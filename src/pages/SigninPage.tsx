import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

export default function SigninPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    reset,
  } = useForm();

  function onSubmit() {}

  return (
    <div className="">
      <div className="">
        <h1 className="font-playfair-bold text-2xl">Create your account</h1>
        <p className="font-lora-regular text-sm">Please enter your details.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Label>Email</Label>
          <Input type="email" {...register("email")} />
          {errors.email && (
            <p className="text-sm text-destructive mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label>Password</Label>
          <Input type="password" {...register("password")} />
        </div>
      </form>
    </div>
  );
}
