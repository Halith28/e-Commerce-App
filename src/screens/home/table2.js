import React from "react";
import MaterialTable from "material-table";
import TextField from "@material-ui/core/TextField";

export default function Table2() {
  const [nameError, setNameError] = React.useState({
    error: false,
    label: "",
    helperText: "",
    validateInput: false,
  });

  const columnsHeader = [
    {
      title: "Name",
      field: "name",
      validate: (rowData) =>
        rowData.name === ""
          ? { isValid: false, helperText: "Name cannot be empty" }
          : true,
      editComponent: (props) => (
        <TextField
          type="text"
          error={
            !props.value && nameError.validateInput && props.rowData.submitted
              ? nameError.error
              : false
          }
          helperText={
            !props.value && nameError.validateInput && props.rowData.submitted
              ? nameError.helperText
              : ""
          }
          value={props.value ? props.value : ""}
          onChange={(e) => {
            if (nameError.validateInput) {
              setNameError({
                ...nameError,
                validateInput: false,
              });
            }

            props.onChange(e.target.value);
          }}
        />
      ),
    },
    { title: "Surname", field: "surname" },
    { title: "Birth Year", field: "birthYear", type: "numeric" },
    {
      title: "Birth Place",
      field: "birthCity",
      lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
    },
    { title: "submitted", field: "submitted", hidden: true },
  ];

  const [state, setState] = React.useState({
    data: [
      {
        name: "Mehmet",
        surname: "Baran",
        birthYear: 1987,
        birthCity: 63,
        submitted: false,
      },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34,
        submitted: false,
      },
    ],
  });

  console.log(nameError);

  return (
    <MaterialTable
      title="Editable Example"
      columns={columnsHeader}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              newData.submitted = true;
              if (!newData.name) {
                setNameError({
                  error: true,
                  label: "required",
                  helperText: "Name is required.",
                  validateInput: true,
                });
                reject();
                return;
              }
              resolve();

              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
              setNameError({
                error: false,
                label: "",
                helperText: "",
                validateInput: false,
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              newData.submitted = true;
              if (!newData.name) {
                setNameError({
                  error: true,
                  label: "required",
                  helperText: "Name is required.",
                  validateInput: true,
                });
                reject();
                return;
              }
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
              setNameError({
                error: false,
                label: "",
                helperText: "",
                validateInput: false,
              });
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}
