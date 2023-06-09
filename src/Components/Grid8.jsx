import {Grid ,Image,Stack, Button ,Card,Heading, Text,CardHeader, CardBody, CardFooter ,GridItem} from '@chakra-ui/react'

import React from 'react'
import CustomCard from './CustomCard'

let arr =[
    {
        imageUrl:'https://thumbs.dreamstime.com/z/plane-icon-red-black-colors-isolated-white-passenger-aircraft-symbol-wings-tail-presenting-fast-mean-93462216.jpg',
         title :"Kana package"
    },
    {
        imageUrl:'https://thumbs.dreamstime.com/z/plane-icon-red-black-colors-isolated-white-passenger-aircraft-symbol-wings-tail-presenting-fast-mean-93462216.jpg',
         title :"Kana package"
    }
    ,
    {
        imageUrl:'https://thumbs.dreamstime.com/z/plane-icon-red-black-colors-isolated-white-passenger-aircraft-symbol-wings-tail-presenting-fast-mean-93462216.jpg',
         title :"Kana package"
    }
    ,
    {
        imageUrl:'https://thumbs.dreamstime.com/z/plane-icon-red-black-colors-isolated-white-passenger-aircraft-symbol-wings-tail-presenting-fast-mean-93462216.jpg',
         title :"Kana package"
    }
    ,
    {
        imageUrl:'https://thumbs.dreamstime.com/z/plane-icon-red-black-colors-isolated-white-passenger-aircraft-symbol-wings-tail-presenting-fast-mean-93462216.jpg',
         title :"Kana package"
    }
    ,
    {
        imageUrl:'https://thumbs.dreamstime.com/z/plane-icon-red-black-colors-isolated-white-passenger-aircraft-symbol-wings-tail-presenting-fast-mean-93462216.jpg',
         title :"Kana package"
    }
    ,
    {
        imageUrl:'https://thumbs.dreamstime.com/z/plane-icon-red-black-colors-isolated-white-passenger-aircraft-symbol-wings-tail-presenting-fast-mean-93462216.jpg',
         title :"Kana package"
    }
    ,
    {
        imageUrl:'https://thumbs.dreamstime.com/z/plane-icon-red-black-colors-isolated-white-passenger-aircraft-symbol-wings-tail-presenting-fast-mean-93462216.jpg',
         title :"Kana package"
    }
]

const Grid8 = () => {
  return (
    <Grid
    border={"none"}
    width={"70%"}
    h='200px'
    templateRows='repeat(2, 1fr)'
    templateColumns='repeat(4, 1fr)'
    gap={1}
    marginLeft="15%"  
    marginTop="200"  
    direction={{ base: 'column', sm: 'row' }}
    >
    
    {arr.map((item)=>{
      return <GridItem >
        <CustomCard imageUrl={item.imageUrl} title={item.title}/>
      </GridItem>
    })}
  </Grid>
  )
}

export default Grid8