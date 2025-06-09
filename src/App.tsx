import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import heroImage from "./assets/images/heroSectionImage.png";
import NavBar from "./components/layout/NavBar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "./components/ui/form";
import { Input } from "./components/ui/input";

const FormSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be atleast 5 characters." })
    .regex(/^[A-Za-z\s\-']+$/, {
      message: "Only letters, spaces, hyphens and apostrophes are allowed.",
    }),
});

function App() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
    },
  });

  function handleSubmit(data: z.infer<typeof FormSchema>) {
    console.log("data: ", data);
  }

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 sm:px-8 lg:px-14">
        <div className="flex flex-col gap-11 justify-center w-full py-14">
          <div className="flex flex-col gap-6">
            <div className="flex justify-center lg:hidden">
              <img src={heroImage} alt="hero image" className="w-[356px]" />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl font-playfair-bold text-[var(--primary-text)]">
                Your Gateway to a Smarter Shelf.
              </h1>
              <p className="font-lora-regular text-[var(--primary-text)]">
                One bookstore. Infinite journeys. Build your collection with the
                best reads around.
              </p>
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
                          className="placeholder:text-[var(--primary-text)] rounded-sm focus:ring-2 focus:ring-[#b17457]"
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
            <img src={heroImage} alt="hero image" className="w-[356px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
