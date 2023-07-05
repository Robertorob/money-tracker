import { FormControl, FormGroup, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useState } from "react";
import './spendings.css';

interface SpendingFormProps {
  children?: any;
}

interface Category {
  id: number;
  name: string;
}

export default function SpendingForm(props: SpendingFormProps) {
  const [category, setCategory] = useState('');
  const [comment, setComment] = useState('');

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const handleCommentChange = (event: any) => {
    setComment(event.target.value as string);
  };

  const categories: Category[] = [
    { id: 1, name: 'Food and everyday stuff' },
    { id: 2, name: 'Car' },
    { id: 3, name: 'Cafe' },
    { id: 4, name: 'Clothes' },
  ]

  return (
        <FormGroup>
          <FormControl fullWidth sx={{ marginTop: '1em' }}>
            <TextField value={comment} label="Comment" variant="outlined" onChange={handleCommentChange} />
          </FormControl>
          <FormControl fullWidth sx={{ marginTop: '1em', marginBottom: '1em' }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              label="Category"
              onChange={handleCategoryChange}
            >
              {
                categories.map(category => (
                  <MenuItem value={category.id}>{category.name}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </FormGroup>
  )
}
