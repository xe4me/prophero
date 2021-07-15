import React from 'react'
import { Container, Grid } from '@material-ui/core';
import { GetStaticPropsContext } from 'next';
import PropertyCard from '../components/property-card/property-card';
const airtable_api_key = process.env.AIRTABLE_API_KEY;

export default function Home({list}) {
  return (
      <Container>
        <Grid container spacing={3}>
          {list.map((property) => {
            return <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={property.address} >
              <PropertyCard {...property}/>
            </Grid>
          })}
        </Grid>
      </Container>
  )
}
export const getStaticProps = async (
    context: GetStaticPropsContext
) => {
  const Airtable = require('airtable');
  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: airtable_api_key
  });
  var base = Airtable.base('appv2zxB4Q41sooTF');
  base('Gaspard & Marie').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    // view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    // records.forEach(function(record) {
    //   console.log('Retrieved', record.fields);
    // });
    console.log('***** record',records[0].fields)
    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  return {props: {list:[
        {
          imageUrl: 'https://rimh2.domainstatic.com.au/QwRHeO_Gv8SNB14MkFk1w5dlbe8=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2016988887_1_1_210506_105034-w2048-h1142',
          price: '500000',
          deposit: '10000',
          address: "1005A/80 Waterloo Road Macquarie Park NSW 2113",
          description: "Situated in Macquarie Park's premier 'Park One', is this large, north-east facing one bedroom apartment that showcases excellence in design and quality finishes. The apartment features a spacious floor plan soaked in natural light, large alfresco balcony, and a practical, generously sized separate study room, perfect as a productive home office. This apartment boasts a modern gas kitchen with a large island bench and stainless steel Miele appliances, a spacious bedroom with a built in wardrobe and ultra-modern bathroom, as well as a convenient internal laundry. Only a short stroll to the popular Macquarie Shopping Centre, Macquarie University and public transport, this apartment proves to hold the perfect balance of convenience and lifestyle.\n" +
              "\n" +
              "* Generous floor plan, living with floorboards, spacious alfresco balcony\n" +
              "* Large study room, floor to ceiling windows, built-in desk, bedroom with BIR\n"
        },
        {
          imageUrl: 'https://rimh2.domainstatic.com.au/xZJj3ez5CKO3Sbq3LW8KWtSWT1o=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2017058629_1_1_210608_110234-w2247-h1500',
          price: '1500000',
          deposit: '150000',
          address: "16/5 Leisure Close Macquarie Park NSW 2113\n",
          description: "Not often do you find the perfect one bedder Spacious, beautifully presented, a private & sunny North/East facing balcony with leafy outlook, undercover parking and so well"
        },
        {
          imageUrl: 'https://rimh2.domainstatic.com.au/LWe4mUoLqnOjoD0SINXNJSlmo1U=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2014374002_3_1_210616_070253-w1600-h1200',
          price: '1500000',
          deposit: '150000',
          address: "1805/1 Mooltan Avenue Macquarie Park NSW 2113\n",
          description: "Your final opportunity to be a part of the iconic Macquarie Park Village.\n" +
              "Macquarie Park Village is situated at the highest and most prominent location in"
        }
      ]}};
}
