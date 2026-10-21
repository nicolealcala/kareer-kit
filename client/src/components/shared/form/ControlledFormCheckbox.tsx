import Checkbox, { type CheckboxProps } from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

type ControlledFormCheckboxProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Omit<CheckboxProps, "name" | "checked" | "onChange" | "value"> & {
  name: TName;
  control: Control<TFieldValues>;
  label: React.ReactNode;
  helperText?: React.ReactNode;
};

const ControlledFormCheckbox = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  name,
  control,
  label,
  helperText,
  ...props
}: ControlledFormCheckboxProps<TFieldValues, TName>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { value, onChange, onBlur, ref },
        fieldState: { error },
      }) => (
        <FormControl
          error={!!error}
          component="fieldset"
          variant="standard"
          sx={{ width: "100%" }}
        >
          <FormControlLabel
            label={label}
            control={
              <Checkbox
                {...props}
                ref={ref}
                checked={!!value}
                onChange={(e) => onChange(e.target.checked)}
                onBlur={onBlur}
                slotProps={{
                  input: {
                    "aria-describedby": error ? `${name}-error` : undefined,
                  },
                }}
              />
            }
            sx={{ mx: 0.5, my: 0 }}
          />
          {(error?.message || helperText) && (
            <FormHelperText id={`${name}-error`} sx={{ mx: 0.5 }}>
              {error?.message ?? helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};

export default ControlledFormCheckbox;
