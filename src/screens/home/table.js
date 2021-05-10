import React, { useState, useEffect } from "react";
//material-table has imported here
import MaterialTable from "material-table";

/* In this Table component, material-table plays major role.
  Material-table is a npm-package (to install --> npm i material-table)
  It is come up with many features and it reduces code weight and length.
  We can customize this Material-table by following their documentation.
  Here is the documentation(`https://material-table.com/#/`) */

// Table Component starts here
const Table = (props) => {
  const [gridData, setGridData] = useState({
    data: props.data,
    columns: props.columns,
    resolve: () => {},
    updatedAt: new Date(),
  });

  useEffect(() => {
    gridData.resolve();
    console.log("RESOLVE AT:", gridData.updatedAt);
  }, [gridData]);

  // onRowAdd function to Add New Row in table
  const onRowAdd = (newData) =>
    new Promise((resolve, reject) => {
      // check the newData here
      if (!newData.name || !newData.price) {
        reject();
        alert("Enter some values in required fields of Name and Price");
        return;
      }
      resolve();
      // Copy current state data to a new array
      const data = [...gridData.data];
      // update state with the new array
      data.push(newData);
      const updatedAt = new Date();
      setGridData({ ...gridData, data, updatedAt, resolve });
    });

  // onRowUpdate function to update existing Row in table
  const onRowUpdate = (newData, oldData) =>
    new Promise((resolve, reject) => {
      // Copy current state data to a new array
      const data = [...gridData.data];
      // Get edited row index
      const index = data.indexOf(oldData);
      // replace old data
      data[index] = newData;
      // update state with the new array
      const updatedAt = new Date();
      setGridData({ ...gridData, data, updatedAt, resolve });
    });

  // onRowDelete function to delete existing Row in table
  const onRowDelete = (oldData) =>
    new Promise((resolve, reject) => {
      // Copy current state data to a new array
      let data = [...gridData.data];
      // Get edited row index
      const index = data.indexOf(oldData);
      // delete the oldData
      data.splice(index, 1);
      // update state with the new array
      const updatedAt = new Date();
      setGridData({ ...gridData, data, updatedAt, resolve });
    });

  return (
    // Material-table starts here
    <MaterialTable
      title="Shop Bridge"
      columns={gridData.columns}
      data={gridData.data}
      editable={{
        isEditable: (rowData) => true,
        isDeletable: (rowData) => true,
        onRowAdd: onRowAdd,
        onRowUpdate: onRowUpdate,
        onRowDelete: onRowDelete,
      }}
      localization={{
        header: {
          actions: "Actions",
        },
        body: {
          emptyDataSourceMessage: "No records to display",
        },
      }}
      options={{
        actionsColumnIndex: -1,
      }}
    />
    // Material-table ends here
  );
};
// Table Component ends here

export default Table;
