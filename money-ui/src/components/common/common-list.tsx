import { Button, Grid, Box, Typography, ListItemButton, Collapse, } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import '../tab/tab-panel.css';
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export interface ICommonListProps {
  items: any[];
  columns: IColumn[];
  deleteHandler: (id: number) => void
  updateHandler: (id: number) => void
  expandHandler: (id: number) => void
  menuWidth?: number;
}

export interface IColumn {
  label: string;
  width: number;
  fieldNames: string[];
}

export default function CommonList(props: ICommonListProps) {
  const maxWidthSx = {maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px', padding: '0'}
  const menuButtonsGridHeight = 4;
  const menuWidth = props.menuWidth ?? 2;

  return  <>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs:1, md: 1, lg: 1 }}>
                {props.columns.map((column: IColumn) =>
                  <Grid item xs={column.width} md={column.width} lg={column.width}>
                    <Typography fontWeight={'bold'} mt={2}>{column.label}</Typography>
                  </Grid>
                )}

                <Grid item xs={2} md={2} lg={2}></Grid>

                {props.items.map((item: any) =>
                  <>
                    {props.columns.map((column: IColumn) => {
                      let columnFieldValue = item;
                      column.fieldNames.some(fieldName => {
                        if (!columnFieldValue || !Object.hasOwn(columnFieldValue, fieldName))
                          return false;
                        columnFieldValue = columnFieldValue[fieldName];
                      });
                      return (
                        <Grid item xs={column.width} md={column.width} lg={column.width}>
                          <Typography mt={2}>{columnFieldValue}</Typography>
                        </Grid>
                      )
                    })}

                    <Grid item xs={menuWidth} md={menuWidth} lg={menuWidth}>
                      <ListItemButton onClick={() => props.expandHandler(item.id)}>
                        {item.expanded ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={item.expanded ?? false} timeout="auto" unmountOnExit>
                        <Grid
                          container
                          direction="column"
                          justifyContent="space-around"
                          alignItems="start"
                          spacing={2}
                        >
                          <Grid item xs={1}></Grid>
                          <Grid item xs={menuButtonsGridHeight} md={menuButtonsGridHeight} lg={menuButtonsGridHeight}>
                            <Button sx={ maxWidthSx } onClick={() => props.updateHandler(item.id)} startIcon={<ModeIcon />} />
                          </Grid>
                          <Grid item xs={2}></Grid>
                          <Grid item xs={menuButtonsGridHeight} md={menuButtonsGridHeight} lg={menuButtonsGridHeight}>
                            <Button sx={maxWidthSx} onClick={() => props.deleteHandler(item.id)} startIcon={<DeleteIcon />} />
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
