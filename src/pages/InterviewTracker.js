import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";

function InterviewTracker(props) {
  let count = 0;
  return (
    <div stlye={{}}>
      <Accordion style={{ width: 1200 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: 10,
            }}
          >
            <h5> {props.name} </h5>
            <span className="badge bg-warning text-dark"> {props.time}</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.summary.map((text) => {
              count++;
              return <p key={count}>{text}</p>;
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default InterviewTracker;
