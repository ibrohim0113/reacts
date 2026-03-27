import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

import axios from "axios"

const App = () => {
  let api = "http://localhost:3000/product"
  let [data, setData] = useState([])

  let [treger, setTreger] = useState(false)

  async function getData() {
    try {
      let { data } = await axios.get(api)
      setData(data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (treger) {
      getData()
    }
    return setTreger(true)
  }, []);

  return (
    <>
      <div className='flex'>
        {data.map((el) => {
          return (
            <Card key={el.id} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <img style={{ height: "200px", width: "100%", objectFit: "cover" }} src={el.img} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {el.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {el.about}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="outlined" color="error">
                  delete
                </Button>
                <Button variant="outlined" size="medium">
                  Edit
                </Button>
              </CardActions>
            </Card>
          )
        })}


      </div>
    </>
  )
}

export default App
