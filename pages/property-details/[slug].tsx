import { Container } from '@material-ui/core';
import React from 'react';
import { useRouter } from 'next/router'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const property = {
  imageUrl: 'https://rimh2.domainstatic.com.au/QwRHeO_Gv8SNB14MkFk1w5dlbe8=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2016988887_1_1_210506_105034-w2048-h1142',
  price: '500000',
  deposit: '10000',
  address: "1005A/80 Waterloo Road Macquarie Park NSW 2113",
  description: "Situated in Macquarie Park's premier 'Park One', is this large, north-east facing one bedroom apartment that showcases excellence in design and quality finishes. The apartment features a spacious floor plan soaked in natural light, large alfresco balcony, and a practical, generously sized separate study room, perfect as a productive home office. This apartment boasts a modern gas kitchen with a large island bench and stainless steel Miele appliances, a spacious bedroom with a built in wardrobe and ultra-modern bathroom, as well as a convenient internal laundry. Only a short stroll to the popular Macquarie Shopping Centre, Macquarie University and public transport, this apartment proves to hold the perfect balance of convenience and lifestyle.\n" +
      "\n" +
      "* Generous floor plan, living with floorboards, spacious alfresco balcony\n" +
      "* Large study room, floor to ceiling windows, built-in desk, bedroom with BIR\n"
};

const useStyles = makeStyles({
  root: {},
});

export default function PropertyDetails() {
  const classes = useStyles();
  const router = useRouter();
  const {slug} = router.query;
  return (
      <Container>
        <Card className={classes.root}>
          <CardMedia
              component="img"
              alt={property.address}
              height="140"
              image={property.imageUrl}
              // title={}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {property.address}
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{maxHeight: "82px", overflow: "hidden"}}
                        component="p">
              {property.description}
            </Typography>
          </CardContent>
        </Card>
      </Container>
  )
}
