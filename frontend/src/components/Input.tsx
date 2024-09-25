import { useFormContext } from "react-hook-form";
import { FormValues } from "../types/util";
import { TextField } from "@mui/material";

const Input = ({ type, name, placeholder }: FormValues) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <TextField
        type={type}
        id={name}
        label={placeholder}
        variant="outlined"
        size="small"
        {...register(name, {
          required: {
            value: true,
            message: `${name} is required`,
          },
          validate: (value: string) => {
            if (typeof value === "string" && value.trim() === "") {
              return `${name} cannot be empty`;
            }
          },
        })}
        error={Boolean(errors[name]?.message)}
        helperText={errors[name]?.message?.toString()}
      />
    </>
  );
};

export default Input;
