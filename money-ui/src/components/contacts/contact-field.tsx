import { Typography, Link } from "@mui/material";
import './contact-field.css';

interface ContactFieldProps {
  name: string;
  link: string;
  value: string;
}

export default function ContactField(props: ContactFieldProps) {
  return  (<Typography variant="body2" className="contact-field">
            {props.name}: <Link href={props.link} underline='hover'>{props.value}</Link>
          </Typography>)
}