import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ContactField from './contact-field';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

export default function Contacts() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid
          container
          direction="row-reverse"
          justifyContent="center"
          alignItems="center"
          sx={{'margin-bottom': '1em'}}
        >
          <Avatar alt="Robert Akhmetshin" src={require('../../avatar.jpg')} sx={{ width: 150, height: 150 }} />
        </Grid>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Akhmetshin Robert
        </Typography>
        <ContactField name='Gmail' link='mailto:ahmetshinrobert94@gmail.com' value='ahmetshinrobert94@gmail.com' />
        <ContactField name='Yandex' link='mailto:robertorob1@yandex.ru' value='robertorob1@yandex.ru' />
        <ContactField name='Telegram' link='https://t.me/robertorob' value='robertorob' />
        <ContactField name='GitHub' link='https://github.com/Robertorob/money-tracker' value='Robertorob/money-tracker' />
        <ContactField name='DockerHub' link='https://hub.docker.com/repositories/robertorob3' value='robertorob3' />
        <ContactField name='LinkedIn' link='https://www.linkedin.com/in/robert-akhmetshin-2b97a6284/' value='Robert Akhmetshin' />
      </CardContent>
    </Card>
  )
}