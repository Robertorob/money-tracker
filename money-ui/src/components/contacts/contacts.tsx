import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import ContactField from './contact-field';

export default function Contacts() {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Akhmetshin Robert
        </Typography>
        <ContactField name='Gmail' link='mailto:ahmetshinrobert94@gmail.com' value='ahmetshinrobert94@gmail.com' />
        <ContactField name='Yandex' link='mailto:robertorob1@yandex.ru' value='robertorob1@yandex.ru' />
        <ContactField name='Telegram' link='https://t.me/robertorob' value='robertorob' />
        <ContactField name='GitHub' link='https://github.com/Robertorob/money-tracker' value='Robertorob/money-tracker' />
        <ContactField name='DockerHub' link='https://hub.docker.com/repositories/robertorob3' value='robertorob3' />
        <ContactField name='LinkedIn' link='www.linkedin.com/in/robert-akhmetshin-2b97a6284' value='Robert Akhmetshin' />
      </CardContent>
    </Card>
    </>
  )
}