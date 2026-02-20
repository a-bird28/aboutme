import { Grid } from '@mui/material'
export default function Contact() {
  return (
    
    <div className='caption'>
      <h2 style={{color:'#FF5985'}}> Contact </h2>
      <Grid container spacing={8}>
        <a href='https://www.linkedin.com/in/anna-byrd/' target="_blank" rel="noopener noreferrer">
          <img
            src = './InBug-White.png'
            alt = 'LinkedIn'
            width='100px'
          />
        </a>
        <a href='https://www.github.com/a-bird28/' target="_blank" rel="noopener noreferrer">
          <img
            src = './GitHub_Invertocat_White.png'
            alt = 'GitHub'
            width='100px'
          />
        </a>
        <a href='https://orcid.org/0000-0003-3174-1218' target="_blank" rel="noopener noreferrer">
          <img
            src = './orcid.logo.icon.svg'
            alt = 'ORCiD'
            width='100px'
          />
        </a>
      </Grid>
    </div>
    
  );
}