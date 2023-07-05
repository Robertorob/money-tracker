import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useSelector } from "react-redux";

interface SpendingsListProps {
  children?: any;
}

export default function SpendingsList(props: SpendingsListProps) {

  let state = useSelector((state: any) => state.spendings);

  return <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='table-header'>
          <TableRow>
            <TableCell>Comment</TableCell>
            <TableCell align="right">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.spendings.map((spending: any) => (
            <TableRow
              key={spending.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {spending.comment}
              </TableCell>
              <TableCell align="right">{spending.category.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
}