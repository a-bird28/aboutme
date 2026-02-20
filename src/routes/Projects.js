import { Card, Grid, Typography, Accordion } from '@mui/material'

const projectCard = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  borderRadius: '1px',
  backgroundColor: 'transparent',
  border: '1px solid #FFFFFF',    // white border
  borderRadius: 2,                // optional rounding
  p: 2 
}

const projectCardTitle = {
  fontFamily: "dejavu-sans, sans-serif",
  fontWeight: 600,
  fontSize: 16,
  fontStyle: "extrabold",
  color: "#00BA60"
}

export default function Projects() {
  return (
    <div className='caption'>
      
      <h2> Projects </h2>
      <Grid>
        <Card sx={projectCard}>
          <Typography sx={projectCardTitle}>
            ChEA-KG: Human Transcription Factor Regulatory Network with a Knowledge Graph User Interface
          </Typography>
        </Card>
      </Grid>
    </div>
  );
}