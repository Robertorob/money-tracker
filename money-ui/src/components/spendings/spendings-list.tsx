import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';

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
  
  const updateButtonClickHandle = (id: number) => {
    dispatch({
      type: 'SEND_SPENDING_TO_FORM',
      payload: id,
    });
  }

  const tableHeadSx = { fontWeight: 'bold' };
  const pZeroSx = { p: 0 };
  const maxWidthSx = {maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}

  return <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={tableHeadSx}>Cost</TableCell>
            <TableCell sx={tableHeadSx} align="right">Comment</TableCell>
            <TableCell sx={tableHeadSx} align="right">Category</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.spendings.map((spending: any) => (
            <TableRow
              key={spending.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {spending.cost}
              </TableCell>
              <TableCell align="right">{spending.comment}</TableCell>
              <TableCell align="right">{spending.category.name}</TableCell>
              <TableCell sx={pZeroSx} align="right"><Button sx={maxWidthSx} onClick={() => updateButtonClickHandle(spending.id)} startIcon={<ModeIcon />}></Button></TableCell>
              <TableCell sx={pZeroSx} align="right"><Button sx={maxWidthSx} onClick={() => deleteButtonClickHandle(spending.id)} startIcon={<DeleteIcon />}></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
}