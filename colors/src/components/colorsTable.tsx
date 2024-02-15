import {
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { Color } from "../store/colorSlice";

type ColorsTableType = {
  colors: Color[];
  handleOpen: (item: Color) => void;
};

const ColorsTable = (props: ColorsTableType) => {
  const [page, setPage] = useState(0);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  return (
    <TableContainer
      component={Card}
      sx={{ maxWidth: 1000, bgcolor: "whitesmoke" }}
    >
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="right">Year</TableCell>
          </TableRow>
          {props.colors.slice(page * 5, page * 5 + 5).map((row, index) => (
            <TableRow
              key={row.id}
              style={{
                backgroundColor: row.color,
              }}
              onClick={() => props.handleOpen(row)}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={props.colors.length}
        rowsPerPage={5}
        page={page}
        onPageChange={handleChangePage}
      />
    </TableContainer>
  );
};

export default ColorsTable;
