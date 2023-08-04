import React from "react";
import { Formik, Field, Form, FormikProvider } from "formik";
import validationSchema from "./validations";
import { useTodo } from "../../Contexts/TodoContext";

function TodoForm() {
  const { todos, addTodo } = useTodo();

  return (
    <div>
      <Formik
        initialValues={{ text: "" }}
        onSubmit={(values, bag) => {
          addTodo(values.text);
          bag.resetForm();
        }}
        // validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              name="text"
              type="text"
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              onChange={handleChange("text")}
            />
            {/* {errors.text && <p className="todo-add-error">{errors.text}</p>} */}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TodoForm;
