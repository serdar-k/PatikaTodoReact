import { object, string } from "yup";

const validationSchema = object({
  text: string().required("Empty todo can not be added!"),
});

export default validationSchema;
