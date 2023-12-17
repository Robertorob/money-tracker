import { Button, Grid, Box, Typography, Select, ListItemButton, ListItemIcon, Collapse, } from "@mui/material";
import { useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import '../tab/tab-panel.css';
import { useEffect } from "react";
import { deleteSpendingAsync } from "../../redux/actionCreators";
import { useAppDispatch } from "../../redux/store";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { ISpending } from "../../classes/spending";

export interface ISpendingsListProps {
  spendings: ISpending[];
}

export default function SpendingsList(props: ISpendingsListProps) {
  const state = useSelector((state: any) => state.spendings);
  const dispatch = useAppDispatch();

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
    dispatch(deleteSpendingAsync(id))
  }
  
  const updateButtonClickHandle = (id: number) => {
    dispatch({
      type: 'SEND_SPENDING_TO_FORM',
      payload: id,
    });
  }

  const maxWidthSx = {maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px', padding: '0'}

  const expandButtonClick = (id: number) => {
    dispatch({
      type: 'EXPAND_SPENDING',
      payload: id
    })
  };

  const menuButtonsGridHeight = 4;

  return  <>
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
                <Grid item xs={2} md={2} lg={2}></Grid>
                {props.spendings.map((spending: ISpending) =>
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
                    <Grid item xs={2} md={2} lg={2}>
                      <ListItemButton onClick={() => expandButtonClick(spending.id)}>
                        {spending.expanded ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={spending.expanded ?? false} timeout="auto" unmountOnExit>
                        <Grid
                          container
                          direction="column"
                          justifyContent="space-around"
                          alignItems="start"
                          spacing={2}
                        >
                          <Grid item xs={1}></Grid>
                          <Grid item xs={menuButtonsGridHeight} md={menuButtonsGridHeight} lg={menuButtonsGridHeight}>
                            <Button sx={ maxWidthSx } onClick={() => updateButtonClickHandle(spending.id)} startIcon={<ModeIcon />} />
                          </Grid>
                          <Grid item xs={2}></Grid>
                          <Grid item xs={menuButtonsGridHeight} md={menuButtonsGridHeight} lg={menuButtonsGridHeight}>
                            <Button sx={maxWidthSx} onClick={() => deleteButtonClickHandle(spending.id)} startIcon={<DeleteIcon />} />
                          </Grid>
                          <Grid item xs={1}></Grid>

                        </Grid>
                      </Collapse>
                    </Grid>
                  </>
                )}
              </Grid>
            </Box>
          </>
}
