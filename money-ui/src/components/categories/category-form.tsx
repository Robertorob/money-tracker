import { Button, FormControl, FormGroup, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICategory } from "../spendings/spending-form";

export interface ICategoryFormProps {
  children?: any;
  categories: ICategory[];
  form: ICategoryForm;
  onNameChange: any;
  onUpdateButtonClick: any;
  onCreateButtonClick: any;
}

export interface ICategoryForm {
  id: number;
  name: string;
  isUpdate: boolean,
}

export default function CategoryForm(props: ICategoryFormProps) {
  const formGroupSx: any = {
    p:'1em',
    borderRadius: '4px',
    marginBottom: '1em',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
  }

  return (
    <FormGroup sx={formGroupSx}>
      <FormControl fullWidth sx={{ marginTop: '1em', marginBottom: '1em' }}>
        <TextField value={props.form.name} label="Name" variant="outlined" onChange={props.onNameChange} />
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
