import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const TNSDC = () => {
  return (
    <Box>
      <Grid item xs={12}>
        <Box sx={{ height: "100" }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              justifyContent: "center",

              background: "linear-gradient(140deg, #f6d365 0%, #fda085 97%)",
            }}
          >
            TNSDC
          </Typography>
        </Box>
      </Grid>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box sx={{ lineHeight: 2, justifyContent: "space-between" }}>
              <Typography variant="h4">About</Typography>

              <Typography variant="body1" sx={{ lineHeight: 2 }}>
                Tamil Nadu Skill Development Corporation was registered as a
                non-profit, Section 25 Company under Companies Act in the year
                2013 to address the skill gap requirement and to expand the
                ambit of its functions. Initially, it was formed as Tamil Nadu
                Skill Development Mission in 2009 and later converted as Society
                followed by incorporation as a Company under the Companies Act.
              </Typography>
              <br />
              <Typography variant="h4">
                The components of the DAY-NULM are:
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 2 }}>
                ⚫ Social Mobilization and Institution Development (SM&ID).{" "}
                <br />
                ⚫ Capacity Building and Training (CB&T).
                <br /> ⚫Employment through Skill Training and Placement
                (EST&P).
                <br />⚫ Self Employment Programme (SEP).⚫ Support to Urban
                Street Vendors (SUH). <br />
                ⚫Scheme of Shelter for Urban Homeless (SUSV), and an exclusive
                component, Innovation & Special Projects (1&SP).
                <br />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box>
              <Typography variant="h4" sx={{ lineHeight: 1.5 }}>
                Short Term Training
              </Typography>

              <Typography variant="body1" sx={{ lineHeight: 2 }}>
                STT component imparted at Sigaram Skill Foundation (TC) is
                expected to benefit candidates of Indian nationality who are
                either school/college dropouts or unemployed. Apart from
                providing training according to the National Skills
                Qualification Framework (NSQF), TCs also impart training in soft
                skills, entrepreneurship, financial and digital literacy. Upon
                successful completion of assessment, candidates are provided
                placement assistance by training providers.
              </Typography>
            </Box>
        
         
              <Typography variant="body1" sx={{ lineHeight: 2 }}>
                The Short-Term Training (STT) shall be implemented under both
                Central and State component of the scheme. STT shall have
                provision for both fresh skilling for trainees who are first
                time learners and reskilling for the trainees/existing workforce
                who have already undergone formal/informal skilling and need
                additional skill sets
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 2 }}>
                Apart from providing training according to the National Skills
                Qualification Framework (NSQF), additional training shall also
                be imparted in English, Employability & Entrepreneurship (EEE)
                modules. Process shall be initiated for imparting add-on Bridge
                courses and language courses for making schemes compatible to
                international standards and requirements. This will enhance the
                potential for international employment of the Indian youth.
              </Typography>
            </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
};

export default TNSDC;
