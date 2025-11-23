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
import { NavLink } from "react-router-dom";
// import { supabase } from "@/lib/config/supabaseClient";
// import { toast } from "sonner";

const formSchema = z.object({
  email: z.email("Please enter a valid email address."),
  password: z.string().min(6, "Password is required"),
});

function Login(props) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(formData) {
    return formData;
    // const { data, error } = await supabase.auth.signInWithPassword({
    //   email: formData.email,
    //   password: formData.password,
    // });
    // if (error) toast.error(error.message);
    // fetch("/api/me", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     access_token: data.session.access_token,
    //     refresh_token: data.session.refresh_token,
    //   }),
    // });
  }
  return (
    <section className="w-sm flex flex-col h-fit">
      <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup className="gap-y-4">
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
                  placeholder="Login button not working on mobile"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <NavLink to="/auth/forgot-password" className="text-sm font-medium">
            Forgot password?
          </NavLink>
        </FieldGroup>
        <Button
          type="submit"
          className="w-full mt-4"
          size="lg"
          disabled={isSubmitting}
        >
          Login
        </Button>
      </form>

      <OAuth />

      <div className="mx-auto my-4 text-sm">
        Don't have an account?{" "}
        <span
          role="button"
          className="text-primary font-medium"
          onClick={() => props.setActiveTab("signup")}
        >
          Signup
        </span>
      </div>
    </section>
  );
}

export default Login;
