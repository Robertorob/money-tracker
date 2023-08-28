import { Button, Grid, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import '../tab/tab-panel.css';
import { useEffect } from "react";

interface SpendingsListProps {
  children?: any;
}

export default function SpendingsList(props: SpendingsListProps) {
  const state = useSelector((state: any) => state.spendings);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/getSpendings`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'FETCH_SPENDINGS', payload: data.spendings })
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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

  const maxWidthSx = {maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}

  return <>
    {
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs:1, md: 1, lg: 1 }}>
        <Grid item xs={3} md={3} lg={3}>
          <Typography fontWeight={'bold'} mt={2}>Cost</Typography>
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Typography fontWeight={'bold'} mt={2}>Comment</Typography>
        </Grid>
        <Grid item xs={3} md={3} lg={3}>
          <Typography fontWeight={'bold'} mt={2}>Category</Typography>
        </Grid>
        <Grid item xs={1} md={1} lg={1}></Grid>
        <Grid item xs={1} md={1} lg={1}></Grid>

        {state.spendings.map((spending: any) => 
          <>
            <Grid item xs={3} md={3} lg={3}>
              <Typography mt={2}>{spending.cost}</Typography>
            </Grid>
            <Grid item xs={4} md={4} lg={4}>
              <Typography mt={2}>{spending.comment}</Typography>
            </Grid>
            <Grid item xs={3} md={3} lg={3}>
              <Typography mt={2}>{spending.category?.name}</Typography>
            </Grid>
            <Grid item xs={1} md={1} lg={1}>
              <Button sx={maxWidthSx} onClick={() => updateButtonClickHandle(spending.id)} startIcon={<ModeIcon />} />
            </Grid>
            <Grid item xs={1} md={1} lg={1}>
              <Button sx={maxWidthSx} onClick={() => deleteButtonClickHandle(spending.id)} startIcon={<DeleteIcon />} />
            </Grid>
          </>
        )}
      </Grid>
    </Box>
    }
  </>
}