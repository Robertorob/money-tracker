import { Button, FormControl, FormGroup, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, createTheme } from "@mui/material";
import { useState } from "react";
import './spendings.css';
import { useDispatch, useSelector } from "react-redux";

interface SpendingFormProps {
  children?: any;
}

interface Category {
  id: number;
  name: string;
}

export default function SpendingForm(props: SpendingFormProps) {
  const initialCategory: Category = {
    id: 0,
    name: '',
  }
  const [category, setCategory] = useState(initialCategory);
  const [comment, setComment] = useState('');

  const categories: Category[] = [
    { id: 1, name: 'Food and everyday stuff' },
    { id: 2, name: 'Car' },
    { id: 3, name: 'Cafe' },
    { id: 4, name: 'Clothes' },
  ];

  const handleCategoryChange = (event: SelectChangeEvent) => {
    const category: Category | undefined = categories.find(category => category?.id?.toString() === event.target.value);
    if (category)
      setCategory(category);
  };

  const handleCommentChange = (event: any) => {
    setComment(event.target.value as string);
  };

  const formGroupSx: any = {
    p:'1em',
    borderRadius: '4px',
    marginBottom: '1em',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
  }

  const dispatch = useDispatch();

  const addButtonClickHandle = () => {
    dispatch({
      type: 'CREATE_SPENDING',
      payload: {
        comment: comment,
        category: category,
      }
    });
  }

  return (
        <FormGroup sx={formGroupSx}>
          <FormControl fullWidth sx={{ marginTop: '1em' }}>
            <TextField value={comment} label="Comment" variant="outlined" onChange={handleCommentChange} />
          </FormControl>
          <FormControl fullWidth sx={{ marginTop: '1em', marginBottom: '1em' }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={category.id.toString()}
              label="Category"
              onChange={handleCategoryChange}
            >
              {
                categories.map((category: Category)=> (
                  <MenuItem value={category.id.toString()}>{category.name}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
          <FormControl>
            <Button variant="contained" onClick={addButtonClickHandle}>Add</Button>
          </FormControl>
        </FormGroup>
  )
}
