import React from 'react';
import picture from './determination.jpg'

function App(){
   return (
      <div>
         <SimpleCard/>
      </div>
   );
}


const simpleCardStyles = {
   border: 'solid rgb(193, 195, 196) 2px',
   borderRadius: '12px',
   margin: '20px 20px',
   display: 'grid',
   maxWidth: '600px',
   gridGap: '1px',
   gridTemplateColumns: '35% 65%',
   gridTemplateRows: '50px 150px',
   padding:'7px',
   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
 
 }
 const imageStyles = {
   gridRowStart: '1',
   gridRowEnd: '3',
   padding: '5px'
 }
 const titleStyles = {
   fontSize: '18px',
   paddingLeft: '14px'
 }
 const descriptionStyles = {
   fontSize: '8px',
   paddingLeft: '14px'
 }
 const image = {
   width:'100%',
   height:'100%',
   objectFit:'cover',
 }
 
 function Image(props){
   return(
     <div style={imageStyles}>
       <img style={image} src={props.image} alt='IMG'/>
     </div>
   )
 }
 
 function Title(props){
   return(
     <div style={titleStyles}>
       <h1 style={{margin:0}}>{props.title}</h1>
     </div>
   )
 }
 
 function Description(props){
   return(
     <div style={descriptionStyles}>
       <h1 style={{fontWeight:'400'}}>{props.description}</h1>
     </div>
   )
 }
 
 function SimpleCard(){
   const image = picture
   const title = 'Determination'
   const description = 'The greatest victory is one which is won against one\'s self therefore I ought to strive for internal peace. ~Plato'
   return(
     <div style={simpleCardStyles}>
       <Image image={image}/>
       <Title title={title}/>
       <Description description={description}/>
     </div>
   )
 }


export default App