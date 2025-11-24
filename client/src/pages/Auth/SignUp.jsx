import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import OAuth from "./OAuthButton";
import { toast } from "sonner";
import { supabase } from "@/lib/config/supabaseClient";
const formSchema = z.object({
  first_name: z.string().min(2, "First name is required").max(100),
  last_name: z.string().min(2, "Last name is required").max(100),
  email: z.email("Please enter a valid email address."),
  password: z.string(),
});

function SignUp() {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(userData) {
    const { data, error } = await supabase.auth.signUp({
      email: userData.email,
      password: userData.password,
      options: {
        data: {
          first_name: userData.first_name,
          last_name: userData.last_name,
        },
      },
    });

    if (error) {
      console.error("Error signing up:", error.message);
      toast.error(`Error signing up: ${error.message}`);
      return;
    }

    fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok)
          throw new Error("Failed to create user on the server.");

        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error creating user on the server.");
      });
  }

  return (
    <section className="w-sm flex flex-col h-fit">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup className="gap-y-4">
          <div className="flex gap-x-4">
            <Controller
              name="first_name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-y-2!">
                  <FieldLabel htmlFor="first_name">First Name</FieldLabel>
                  <Input
                    {...field}
                    id="first_name"
                    disabled={isSubmitting}
                    aria-invalid={fieldState.invalid}
                    placeholder="John"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="last_name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-y-2!">
                  <FieldLabel htmlFor="last_name">Last Name</FieldLabel>
                  <Input
                    {...field}
                    id="last_name"
                    disabled={isSubmitting}
                    aria-invalid={fieldState.invalid}
                    placeholder="Doe"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-y-2!">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  {...field}
                  id="email"
                  disabled={isSubmitting}
                  aria-invalid={fieldState.invalid}
                  placeholder="johndoe@example.com"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-y-2!">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  {...field}
                  id="password"
                  type="passsword "
                  disabled={isSubmitting}
                  aria-invalid={fieldState.invalid}
                  placeholder="Password"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
        <Button
          type="submit"
          className="w-full mt-6"
          size="lg"
          disabled={isSubmitting}
        >
          Sign up
        </Button>

        <OAuth />
      </form>
    </section>
  );
}

export default SignUp;
