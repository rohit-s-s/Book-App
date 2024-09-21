export const handleChange = (event,formState,setFormState) => {
  setFormState({ ...formState, [event.target.name]: event.target.value });
};

export const handleSubmitById = (event,formState,id,mutate) => {
  event.preventDefault();
  mutate({formState,id});
};

export const handleSubmit = (event,formState,mutate) => {
  event.preventDefault();
  mutate({formState});
};
