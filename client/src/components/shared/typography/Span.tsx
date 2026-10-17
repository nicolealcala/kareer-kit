import Typography, { type TypographyProps } from "@mui/material/Typography";

export default function Span({
  children,
  fontWeight,
  color,
  variant = "body1",
  ...props
}: TypographyProps) {
  return (
    <Typography
      {...props}
      variant={variant}
      component="span"
      color={color || "initial"}
      fontWeight={fontWeight || "medium"}
    >
      {children}
    </Typography>
  );
}
