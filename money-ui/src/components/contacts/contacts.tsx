import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

export default function Contacts() {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Akhmetshin Robert
        </Typography>
        <Typography variant="body2">
          Gmail: <Link href='mailto:ahmetshinrobert94@gmail.com' underline='hover'>ahmetshinrobert94@gmail.com</Link>
        </Typography>
        <Typography variant="body2">
          Yandex: <Link href='mailto:robertorob1@yandex.ru' underline='hover'>robertorob1@yandex.ru</Link>
        </Typography>
        <Typography variant="body2">
          Telegram: <Link href='https://t.me/robertorob' underline='hover'>robertorob</Link>
        </Typography>
        <Typography variant="body2">
          GitHub: <Link href='https://github.com/Robertorob/money-tracker' underline='hover'>Robertorob/money-tracker</Link>
        </Typography>
        <Typography variant="body2">
          DockerHub: <Link href='https://hub.docker.com/repository/docker/robertorob3/money-ui' underline='hover'>robertorob3/money-ui</Link>
        </Typography>
      </CardContent>
    </Card>
    </>
  )
}