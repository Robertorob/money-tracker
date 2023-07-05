import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';

interface SpendingsListProps {
  children?: any;
}

export default function SpendingsList(props: SpendingsListProps) {

  const state = useSelector((state: any) => state.spendings);

  const dispatch = useDispatch();

  const deleteButtonClickHandle = (id: number) => {
    dispatch({
      type: 'DELETE_SPENDING',
      payload: id,
    });
  }

  return <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Comment</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="right">Category</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="right"></TableCell>
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
              <TableCell align="right"><Button onClick={() => deleteButtonClickHandle(spending.id)} startIcon={<DeleteIcon />}></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
}