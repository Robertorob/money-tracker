import { Button, FormControl, FormGroup, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import ReactSelect from 'react-select' ;

export interface IField {
  value: any;
  type: 'number' | 'text' | 'select' | 'multiselect' | 'mui-select';
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
        props.fields.map((field: IField) =>
        {
          if (field.type === 'number' || field.type === 'text')
            return (
              <FormControl fullWidth sx={formControlSx}>
                <TextField value={field.value} label={field.label} onChange={field.onChange} type={field.type} variant="outlined"/>
              </FormControl>
            );

          if (field.type === 'mui-select')
            return (
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
            );
          
          if (field.type === 'select')
            return (
              <FormControl fullWidth sx={formControlSx}>
                <ReactSelect
                  placeholder={field.label}
                  options={field.selectOptions ?? []}
                  className="basic-single"
                  onChange={field.onChange}
                />
              </FormControl>
            );
          
          if (field.type === 'multiselect')
            return (
              <FormControl fullWidth sx={formControlSx}>
                <ReactSelect
                  placeholder={field.label}
                  isMulti
                  options={field.selectOptions ?? []}
                  className="basic-multi-select"
                  onChange={field.onChange}
                />
              </FormControl>
            );
        })
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
