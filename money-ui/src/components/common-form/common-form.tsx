import { Button, FormControl, FormGroup, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface IField {
  value: any;
  type: string;
  label: string;
  onChange: any;
  selectOptions?: ISelectOption[];
}

export interface ICommonFormProps {
  fields: IField[],
  isUpdate: boolean,
  onUpdateButtonClick: any;
  onCreateButtonClick: any;
}

export interface ISelectOption {
  value: any,
  label: string,
}

export default function CommonForm(props: ICommonFormProps) {
  const formGroupSx: any = {
    p:'1em',
    borderRadius: '4px',
    marginBottom: '1em',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
  }

  const formControlSx: any = {
    marginTop: '1em',
  }

  return (
    <FormGroup sx={formGroupSx}>
      {
        props.fields.map((field: IField)=> (
          !field.selectOptions ?
            <FormControl fullWidth sx={formControlSx}>
              <TextField value={field.value} label={field.label} onChange={field.onChange} type={field.type} variant="outlined"/>
            </FormControl>
          :
            <FormControl fullWidth sx={formControlSx}>
              <InputLabel>{field.label}</InputLabel>
              <Select
                value={field.value}
                label={field.label}
                onChange={field.onChange}
              >
                {
                  field.selectOptions!.map((option: ISelectOption)=> (
                    <MenuItem value={option.value}>{option.label}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
        ))
      }
      {
        props.isUpdate ?
        <FormControl sx={formControlSx}>
          <Button variant="contained" onClick={props.onUpdateButtonClick}>Update</Button>
        </FormControl> : 
        <FormControl sx={formControlSx}>
          <Button variant="contained" onClick={props.onCreateButtonClick}>Add</Button>
        </FormControl>
      }
    </FormGroup>
  )
}
