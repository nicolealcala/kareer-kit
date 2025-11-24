import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import OAuth from "./OAuthButton";
// import { supabase } from "@/lib/config/supabaseClient";
const formSchema = z.object({
  first_name: z.string().min(2).max(100),
  last_name: z.string().min(2).max(100),
  email: z.email("Please enter a valid email address."),
  password: z.string(),
});

function SignUp() {
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
    // const { data, error } = await supabase.auth.signUp({
    //   email: userData.email,
    //   password: userData.password,
    //   options: {
    //     data: {
    //       first_name: userData.first_name,
    //       last_name: userData.last_name,
    //     },
    //   },
    // });
    console.log(userData);
  }
  return (
    <section className="w-sm flex flex-col h-fit">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup className="gap-y-4">
          <dov className="flex gap-x-4">
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
          </dov>

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
