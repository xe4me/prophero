import React from 'react'
import { Container, Grid } from '@material-ui/core';
import { GetStaticPropsContext } from 'next';
import PropertyCard from '../components/property-card/property-card';


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
  const res = await fetch('http://localhost:3000/api/property-list');
  const list = await res.json();
  console.log('**** list', list)
  return {props: {list}};
}
