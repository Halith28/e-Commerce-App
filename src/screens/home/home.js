import { Grid, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import Table from "./table";

// this styling to make good appearance in Home Component
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
  },
}));

// this JSON has passed into Table component for displaying data in Table.
const data = [
  {
    name: "Samsung Galaxy S10",
    description: "4GB RAM, 64GB ROM",
    price: "20000",
    category: "Mobile Phones",
    brand: "Samsung",
    in_stock: "2 Units",
  },
  {
    name: "Llyod Split AC",
    description: "1.5 Ton AC",
    price: "40000",
    category: "Air Conditioners",
    brand: "Llyod",
    in_stock: "5 Units",
  },
  {
    name: "Honda Amaze",
    description: "Modern Cars",
    price: "1000000",
    category: "Cars",
    brand: "Honda",
    in_stock: "10 Units",
  },
  {
    name: "Redmi Note 8 Pro",
    description: "4GB RAM, 64GB ROM",
    price: "14000",
    category: "Mobile Phones",
    brand: "Redmi",
    in_stock: "15 Units",
  },
  {
    name: "HP Elitebook",
    description: "4GB RAM, 64GB ROM",
    price: "35000",
    category: "Laptops",
    brand: "HP",
    in_stock: "25 Units",
  },
  {
    name: "Samsung Galaxy S10",
    description: "4GB RAM, 64GB ROM",
    price: "20000",
    category: "Mobile Phones",
    brand: "Samsung",
    in_stock: "2 Units",
  },
  {
    name: "Samsung Galaxy S10",
    description: "SmartPhones",
    price: "20000",
    category: "Mobile Phones",
    brand: "Samsung",
    in_stock: "2 Units",
  },
  {
    name: "Samsung Galaxy S10",
    description: "SmartPhones",
    price: "20000",
    category: "Mobile Phones",
    brand: "Samsung",
    in_stock: "2 Units",
  },
];

// this JSON passed into table component for setting Columns in Table.
const columns = [
  {
    title: "Name",
    field: "name",
    validate: (rowData) =>
      rowData.name === ""
        ? { isValid: false, helperText: "Name cannot be empty" }
        : true,
  },
  { title: "Description", field: "description" },
  { title: "Category", field: "category" },
  { title: "Brand", field: "brand" },
  {
    title: "InStock",
    field: "in_stock",
    editComponent: (props) => (
      <TextField
        defaultValue={props.value || "0 Units"}
        onChange={(e) => props.onChange(e.target.value)}
      />
    ),
  },
  {
    title: "Price",
    field: "price",
    type: "numeric",
    validate: (rowData) =>
      rowData.price === ""
        ? { isValid: false, helperText: "Price cannot be empty" }
        : true,
  },
];

// HomeComponent has constructed here
const HomeComponent = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      {/* Table Compoent starts here */}

      <Table col={columns} data={data} />

      {/* Table Compoent ends here */}
    </Grid>
  );
};

export default HomeComponent;
