import React from "react";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "../ui/input-group";
import { Eye, EyeSlash } from "iconsax-reactjs";

function PasswordInput(props) {
  const [isPasswordHidden, setIsPasswordHidden] = React.useState(true);
  return (
    <InputGroup>
      <InputGroupInput
        {...props.field}
        id="password"
        type={isPasswordHidden ? "password" : "text"}
        disabled={props.isSubmitting}
        aria-invalid={props.fieldState.invalid}
        placeholder="Password"
        autoComplete="off"
      />

      <InputGroupAddon align="inline-end">
        <div
          role="button"
          size="icon"
          onClick={() => setIsPasswordHidden((prev) => !prev)}
        >
          {isPasswordHidden ? (
            <Eye variant="Bold" className="size-5 text-slate-500" />
          ) : (
            <EyeSlash variant="Bold" className="size-5 text-slate-500" />
          )}
        </div>
      </InputGroupAddon>
    </InputGroup>
  );
}

export default PasswordInput;
