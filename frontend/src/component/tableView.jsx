import React from "react";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import {Grid} from '@mui/icons-material'
const url='http://localhost:6000/table'
const {data}=axios.get(url)

const Tabledisplay=()=>{
    return(

        <Grid container>
            {data.map((table)=>(

            <Grid item lg={4} md={6} sm={6} xs={12}>
                 <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ItemNo:{table.itemNo}
        </Typography>
        <Typography variant="h5" component="div">
          amount:{table.amount}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          rate:{table.rate}
        </Typography>
        <Typography variant="body2">
          qty:{table.qty}
        </Typography>
        <Typography variant="body2">
          Description:{table.description}
        </Typography>
      </CardContent>
      
    </Card>
            </Grid>


            ))}
            <Grid item></Grid>
        </Grid>

    )
}


export default Tabledisplay