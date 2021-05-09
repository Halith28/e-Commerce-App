import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
// Icons
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";
import { Grid, TableSortLabel, TextField } from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
  selectTableCell: {
    width: 60,
  },
  //   tableCell: {
  //     width: 130,
  //     height: 40,
  //   },
  //   input: {
  //     width: 130,
  //     height: 40,
  //   },
  actionIcons: {
    display: "inline-flex",
  },
}));

const createData = (name, calories, fat, carbs, protein) => ({
  id: name.replace(" ", "_"),
  name,
  calories,
  fat,
  carbs,
  protein,
  isEditMode: false,
});

const CustomTableCell = ({ row, name, onChange }) => {
  const classes = useStyles();
  const { isEditMode } = row;
  return (
    <TableCell align="left" className={classes.tableCell}>
      {isEditMode ? (
        // <Input
        //   value={row[name]}
        //   name={name}
        //   onChange={(e) => onChange(e, row)}
        //   className={classes.input}
        //   fullWidth
        // />
        <TextField
          value={row[name]}
          name={name}
          onChange={(e) => onChange(e, row)}
          className={classes.input}
          fullWidth
        />
      ) : (
        row[name]
      )}
    </TableCell>
  );
};

const data = [
  {
    name: "Samsung Galaxy S10",
    description: "4GB RAM, 64GB ROM",
    price: "20000",
    category: "Mobile Phones",
    brand: "Samsung",
    in_stock: "2 Units",
    val: "0.4",
  },
  {
    name: "Llyod Split AC",
    description: "1.5 Ton AC",
    price: "40000",
    category: "Air Conditioners",
    brand: "Llyod",
    in_stock: "5 Units",
    val: "0.4",
  },
  {
    name: "Honda Amaze",
    description: "Modern Cars",
    price: "1000000",
    category: "Cars",
    brand: "Honda",
    in_stock: "10 Units",
    val: "0.4",
  },
  {
    name: "Redmi Note 8 Pro",
    description: "4GB RAM, 64GB ROM",
    price: "14000",
    category: "Mobile Phones",
    brand: "Redmi",
    in_stock: "15 Units",
    val: "0.4",
  },
  {
    name: "HP Elitebook",
    description: "4GB RAM, 64GB ROM",
    price: "35000",
    category: "Laptops",
    brand: "HP",
    in_stock: "25 Units",
    val: "0.4",
  },
  {
    name: "Samsung Galaxy S10",
    description: "4GB RAM, 64GB ROM",
    price: "20000",
    category: "Mobile Phones",
    brand: "Samsung",
    in_stock: "2 Units",
    val: "0.4",
  },
  {
    name: "Samsung Galaxy S10",
    description: "SmartPhones",
    price: "20000",
    category: "Mobile Phones",
    brand: "Samsung",
    in_stock: "2 Units",
    val: "0.4",
  },
  {
    name: "Samsung Galaxy S10",
    description: "SmartPhones",
    price: "20000",
    category: "Mobile Phones",
    brand: "Samsung",
    in_stock: "2 Units",
    val: "0.4",
  },
];

function TableNew() {
  const [rows, setRows] = React.useState(data);
  const [previous, setPrevious] = React.useState({});
  const classes = useStyles();

  const onToggleEditMode = (id) => {
    setRows((state) => {
      return rows.map((row) => {
        if (row.id === id) {
          return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
  };

  const onChange = (e, row) => {
    if (!previous[row.id]) {
      setPrevious((state) => ({ ...state, [row.id]: row }));
    }
    const value = e.target.value;
    const name = e.target.name;
    const { id } = row;
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

  const onRevert = (id) => {
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return previous[id] ? previous[id] : row;
      }
      return row;
    });
    setRows(newRows);
    setPrevious((state) => {
      delete state[id];
      return state;
    });
    onToggleEditMode(id);
  };

  const onDelete = (rowIndex, row) => {
    debugger;
    rows.splice(rowIndex, 1);
    setRows([...rows]);
    // props.deleteList.push(row?._id);
    // const array = rows?.filter((value, index) => index !== rowIndex);
    // setRows(array);
    // const array = rows.splice(rowIndex, 1);
    // setRows(array);
    // props.TableCellChange(array, props.index);
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="caption table" size="small">
        <caption>A barbone structure table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableSortLabel active direction="asc">
              <TableCell style={{ minWidth: 200 }}>Name</TableCell>
            </TableSortLabel>
            <TableCell>Description</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id}>
              <CustomTableCell {...{ row, name: "name", onChange }} />
              <CustomTableCell {...{ row, name: "description", onChange }} />
              <CustomTableCell {...{ row, name: "category", onChange }} />
              <CustomTableCell {...{ row, name: "brand", onChange }} />
              <CustomTableCell {...{ row, name: "price", onChange }} />
              <TableCell className={classes.selectTableCell}>
                {row.isEditMode ? (
                  <Grid className={classes.actionIcons}>
                    <IconButton
                      aria-label="done"
                      onClick={() => onToggleEditMode(row.id)}
                    >
                      <DoneIcon />
                    </IconButton>
                    <IconButton
                      aria-label="revert"
                      onClick={() => onRevert(row.id)}
                    >
                      <RevertIcon />
                    </IconButton>
                  </Grid>
                ) : (
                  <Grid className={classes.actionIcons}>
                    <IconButton
                      aria-label="delete"
                      onClick={() => onToggleEditMode(row.id)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => onDelete(index, row)}
                    >
                      <DeleteOutlinedIcon />
                    </IconButton>
                  </Grid>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default TableNew;
