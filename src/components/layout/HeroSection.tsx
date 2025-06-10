import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import heroImage from "../../assets/images/heroSectionImage.png";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const FormSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be atleast 5 characters." })
    .regex(/^[A-Za-z\s\-']+$/, {
      message: "Only letters, spaces, hyphens and apostrophes are allowed.",
    }),
});

export default function HeroSection() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
    },
  });

  //TODO: Implement the search functionality
  function handleSubmit(data: z.infer<typeof FormSchema>) {
    console.log("data: ", data);
  }
  return (
    <div
      className={clsx(
        "flex flex-col gap-11 justify-center w-full py-14",
        "lg:flex-row lg:py-20"
      )}
    >
      <div className="flex flex-col gap-6">
        <div className="flex justify-center lg:hidden">
          <img src={heroImage} alt="hero image" className="w-[356px]" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 lg:gap-4">
            <h1
              className={clsx(
                "text-5xl font-playfair-bold text-[var(--primary-text)] leading-[1.2]",
                "md:text-6xl",
                "lg:text-[4rem]"
              )}
            >
              Your Gateway to a Smarter Shelf.
            </h1>
            <p className="font-lora-regular text-[var(--primary-text)]">
              One bookstore. Infinite journeys. Build your collection with the
              best reads around.
            </p>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Search book title or author."
                      {...field}
                      className={clsx(
                        "w-full max-w-lg h-12",
                        "rounded-lg shadow-md",
                        "placeholder:text-[var(--primary-text)]",
                        "focus:ring-2 focus:ring-[#b17457]",
                        "border border-gray-300 dark:border-gray-700",
                        "lg:max-w-sm lg:h-11"
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
      <div className="hidden lg:flex">
        <img
          src={heroImage}
          alt="hero image"
          className="w-[22.25rem] lg:w-[34.25rem] xl:w-[39rem]"
        />
      </div>
    </div>
  );
}
