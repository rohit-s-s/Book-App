import { Button, Stack } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import { Value } from "../types/util";
import { UseMutateFunction } from "@tanstack/react-query";

type FormProps = {
  mutate: UseMutateFunction<void, Error, Value, unknown>;
  data?: Value;
};

const Form = ({ mutate, data }: FormProps) => {
  const method = useForm<Value>({
    defaultValues: {
      title: data?.title,
      author: data?.author,
      publishYear: data?.publishYear,
    },
  });
  const { handleSubmit } = method;
  const onSubmit: SubmitHandler<Value> = (data) => mutate(data);
  return (
    <div className="form">
      <FormProvider {...method}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack direction={"column"} spacing={2}>
            <Input name="title" placeholder="Enter Title" type="text" />
            <Input name="author" placeholder="Enter author" type="text" />
            <Input name="publishYear" placeholder="Enter year" type="number" />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
