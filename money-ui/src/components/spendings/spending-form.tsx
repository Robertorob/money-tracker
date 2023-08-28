import { Button, FormControl, FormGroup, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface ISpendingFormProps {
  children?: any;
  categories: ICategory[];
  form: ISpendingForm;
  onCostChange: any;
  onCommentChange: any;
  onCategoryChange: any;
  onUpdateButtonClick: any;
  onCreateButtonClick: any;
}

export interface ISpendingForm {
  id: number;
  cost: number;
  comment: string;
  category: ICategory;
  isUpdate: boolean,
}

export interface ICategory {
  id: number;
  name: string;
}

export default function SpendingForm(props: ISpendingFormProps) {
  const formGroupSx: any = {
    p:'1em',
    borderRadius: '4px',
    marginBottom: '1em',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
  }

  return (
    <FormGroup sx={formGroupSx}>
      <FormControl fullWidth sx={{ marginTop: '1em' }}>
        <TextField value={props.form.cost} label="Cost" variant="outlined" onChange={props.onCostChange} type="number" />
      </FormControl>
      <FormControl fullWidth sx={{ marginTop: '1em' }}>
        <TextField value={props.form.comment} label="Comment" variant="outlined" onChange={props.onCommentChange} />
      </FormControl>
      <FormControl fullWidth sx={{ marginTop: '1em', marginBottom: '1em' }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={props.form.category?.id?.toString()}
          label="Category"
          onChange={props.onCategoryChange}
        >
          {
            props.categories.map((category: ICategory)=> (
              <MenuItem value={category.id.toString()}>{category?.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
        {props.form.isUpdate ? 
          <FormControl>
            <Button variant="contained" onClick={props.onUpdateButtonClick}>Update</Button>
          </FormControl> : 
        <FormControl>
          <Button variant="contained" onClick={props.onCreateButtonClick}>Add</Button>
        </FormControl>}
    </FormGroup>
  )
}
