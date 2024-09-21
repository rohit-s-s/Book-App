import { Stack, TextField, Button } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

// eslint-disable-next-line react/prop-types
export const Form = ({ id }) => {
  const query = useQueryClient();
  const data = query.getQueryData(["book", id]);
  console.log(data.title);

  const method = useForm({
    defaultValues: {
      title: data.title,
      author: data.author,
      year: data.publishYear,
    },
  });
  const onSubmit = ()=>{
    method.handleSubmit(async (data) => {console.log(data)})
}

  return (
    <FormProvider {...method}>
      <form onSubmit={e=>e.preventDefault()} noValidate>
        <Stack direction={"column"} spacing={2} width={250}>
          <Input label="Enter title" id="title" name="title" />
          <Input label="Enter Author" id="author" name="author" />
          <Input label="Enter Published Year" id="year" name="year" type="number" />
          <Button
          type="submit"
          onClick={onSubmit}
            size="small"
            variant="contained"
          >
            Submit
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

// eslint-disable-next-line react/prop-types
const Input = ({ label, name, id, type="text" }) => {
  const { register, formState } = useFormContext();
  const { errors } = formState;

  return (
    <TextField
      label={label}
      variant="outlined"
      size="small"
      type={type}
      name={name}
      id={id}
      {...register(name, {
        required: {
          value: true,
          message: `${name} is required`,
        },
      })}
      helperText={errors[name]?.message}
    />
  );
};
