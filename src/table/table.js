import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    textAlign: "center",
    fontSize: "16px"
  },
  body: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "500"
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },

  table: {
    minWidth: 200
  },

  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Единицы</CustomTableCell>
            <CustomTableCell>Десятки</CustomTableCell>
            <CustomTableCell>Сотни</CustomTableCell>
            <CustomTableCell>Тысячи</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <CustomTableCell>1 i</CustomTableCell>
            <CustomTableCell>10 x</CustomTableCell>
            <CustomTableCell>100 c</CustomTableCell>
            <CustomTableCell>1000 m</CustomTableCell>
          </TableRow>
          <TableRow>
            <CustomTableCell>2 ii</CustomTableCell>
            <CustomTableCell>20 xx</CustomTableCell>
            <CustomTableCell>200 cc</CustomTableCell>
            <CustomTableCell>2000 mm</CustomTableCell>
          </TableRow>
          <TableRow>
            <CustomTableCell>3 iii</CustomTableCell>
            <CustomTableCell>30 xxx</CustomTableCell>
            <CustomTableCell>300 ccc</CustomTableCell>
            <CustomTableCell>3000 mmm</CustomTableCell>
          </TableRow>
          <TableRow>
            <CustomTableCell>4 iv</CustomTableCell>
            <CustomTableCell>40 xl</CustomTableCell>
            <CustomTableCell>400 cd</CustomTableCell>
            <CustomTableCell />
          </TableRow>
          <TableRow>
            <CustomTableCell>5 v</CustomTableCell>
            <CustomTableCell>50 l</CustomTableCell>
            <CustomTableCell>500 d</CustomTableCell>
            <CustomTableCell />
          </TableRow>
          <TableRow>
            <CustomTableCell>6 vi</CustomTableCell>
            <CustomTableCell>60 lx</CustomTableCell>
            <CustomTableCell>600 dc</CustomTableCell>
            <CustomTableCell />
          </TableRow>
          <TableRow>
            <CustomTableCell>7 vii</CustomTableCell>
            <CustomTableCell>70 lxx</CustomTableCell>
            <CustomTableCell>700 dcc</CustomTableCell>
            <CustomTableCell />
          </TableRow>
          <TableRow>
            <CustomTableCell>8 viii</CustomTableCell>
            <CustomTableCell>80 lxxx</CustomTableCell>
            <CustomTableCell>800 dccc</CustomTableCell>
            <CustomTableCell />
          </TableRow>
          <TableRow>
            <CustomTableCell>9 ix</CustomTableCell>
            <CustomTableCell>90 xc</CustomTableCell>
            <CustomTableCell>900 dccc</CustomTableCell>
            <CustomTableCell />
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
