import { Button, Grid, Box, Typography, ListItemButton, Collapse, } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import '../tab/tab-panel.css';
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { ITag } from "../../classes/tag";

export interface ITagsListProps {
  tags: ITag[];
  deleteHandler: (id: number) => void
  updateHandler: (id: number) => void
  expandHandler: (id: number) => void
}

export default function TagsList(props: ITagsListProps) {
  const maxWidthSx = {maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px', padding: '0'}
  const menuButtonsGridHeight = 4;

  return  <>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs:1, md: 1, lg: 1 }}>
                <Grid item xs={6} md={6} lg={6}>
                  <Typography fontWeight={'bold'} mt={2}>Name</Typography>
                </Grid>
                <Grid item xs={6} md={6} lg={6}></Grid>
                {props.tags.map((tag: ITag) =>
                  <>
                    <Grid item xs={6} md={6} lg={6}>
                      <Typography mt={2}>{tag.name}</Typography>
                    </Grid>
                    <Grid item xs={6} md={6} lg={6}>
                      <ListItemButton onClick={() => props.expandHandler(tag.id)}>
                        {tag.expanded ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={tag.expanded ?? false} timeout="auto" unmountOnExit>
                        <Grid
                          container
                          direction="column"
                          justifyContent="space-around"
                          alignItems="start"
                          spacing={2}
                        >
                          <Grid item xs={1}></Grid>
                          <Grid item xs={menuButtonsGridHeight} md={menuButtonsGridHeight} lg={menuButtonsGridHeight}>
                            <Button sx={ maxWidthSx } onClick={() => props.updateHandler(tag.id)} startIcon={<ModeIcon />} />
                          </Grid>
                          <Grid item xs={2}></Grid>
                          <Grid item xs={menuButtonsGridHeight} md={menuButtonsGridHeight} lg={menuButtonsGridHeight}>
                            <Button sx={maxWidthSx} onClick={() => props.deleteHandler(tag.id)} startIcon={<DeleteIcon />} />
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
