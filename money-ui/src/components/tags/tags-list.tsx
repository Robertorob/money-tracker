import { Button, Grid, Box, Typography, ListItemButton, Collapse, } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import '../tab/tab-panel.css';
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { ITagItem } from "../../classes/tag";
import CommonList from "../common/common-list";

export interface ITagsListProps {
  tags: ITagItem[];
  deleteHandler: (id: number) => void
  updateHandler: (id: number) => void
  expandHandler: (id: number) => void
}

export default function TagsList(props: ITagsListProps) {
  const maxWidthSx = {maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px', padding: '0'}
  const menuButtonsGridHeight = 4;

  return  <>
            <CommonList
              items={props.tags}
              columns={[
                {
                  label: 'Name',
                  width: 6,
                  fieldNames: ['name'],
                },
              ]}
              deleteHandler={props.deleteHandler}
              updateHandler={props.updateHandler}
              expandHandler={props.expandHandler}
              menuWidth={6}
            />
          </>
}
