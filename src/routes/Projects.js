import { Card, Grid, Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'

const projectCard = {
  display: 'flex',
  flexDirection: 'column',
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
      <div>
        <Accordion sx={projectCard}>
          <AccordionSummary
            expandIcon={<CodeIcon color="#00BA60"/>}
            aria-controls="panel1-content"
            id="panel1-header"
          >
          <Typography sx={projectCardTitle}>
            Developing an interactive user interface for a new human gene regulatory network
          </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>
            Associated publications:
            </p>
            <p>
              <a href="https://doi.org/10.1093/bioadv/vbaf237">
                Byrd AI*, Evangelista JE, Lachmann A, et al. ChEA-KG: Human Transcription Factor Regulatory Network with a Knowledge Graph Interactive User Interface. bioRxiv. 2025.08.09.669505 [Preprint].
              </a>
            </p>
            <p>
              <a href="https://doi.org/10.1002/cpz1.70200">
                Evangelista JE, Lustky A, Byrd AI*, et al. Creating an Interactive Web Interface for Networks Stored in Knowledge Graph Databases. Current Protocols. 2025. 5;e70200.
              </a>
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={projectCard}>
          <AccordionSummary
            expandIcon={<CodeIcon color="#00BA60"/>}
            aria-controls="panel1-content"
            id="panel1-header"
          >
          <Typography sx={projectCardTitle}>
            Optimizing and debugging a single-cell analysis workflow
          </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>
            Associated publication:
            </p>
            <p>
              <a href="https://doi.org/10.1093/bioadv/vbaf237">
                Marino GB, Byrd AI*, Ahmed N, et al. sc2DAT: Workflow for targeting tumor subpopulations of cells. Bioinformatics Advances. 2025. 5(1):vbaf237.
              </a>
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={projectCard}>
          <AccordionSummary
            expandIcon={<CodeIcon color="#00BA60"/>}
            aria-controls="panel1-content"
            id="panel1-header"
          >
          <Typography sx={projectCardTitle}>
            Developing a testing protocol for a UV sterilization device for catheter fluid
          </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>
            Bachelor of Engineering culminating project.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}