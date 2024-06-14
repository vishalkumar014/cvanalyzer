import React,{useState} from 'react'
import AuthWrapper from '../authentication/AuthWrapper';
import { Grid, Typography,Button,Box,TextField } from '@mui/material';
import CustomeModel from '../../component/CustomeModel'
import { styled } from '@mui/material/styles';

const typoSX = {
  fontSize:{xs:30,sm:40},
  textAlign:"center",
  color:"#fff"
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function Main() {
  const [jobDescriptionModel,setJobDescriptionModel]  = useState(false)
  const [jobDescription,setJobDescription]            = useState('')
  const [jobDescriptionPasted,setJobDescriptionPasted] = useState(false)
  const [CVModel,setCVModel]  = useState(false)
  const [CV,setCV]            = useState('')
  const [CVPasted,setCVPasted] = useState(false)


  const jobDescriptionModelHandler = () => {
    setJobDescriptionModel(true)
    setJobDescription('')
    setJobDescriptionPasted(false)
  }

  const jobmodelCloseHAndler = () =>{
    setJobDescriptionModel(false)
  }

  const jobDescriptionHandler = (event) =>{
    setJobDescription(event.target.value)
  }

  const jobDescriptionConfirmHandler = () =>{
    if (jobDescription !== ''){
      setJobDescriptionPasted(true)
    } else {
      setJobDescriptionPasted(false)
    }
    jobmodelCloseHAndler()
  } 

  const cvModelOpenHandler = () => {
    setCVModel(true)
  }

  const uploadCVandler = (event) =>{
    const file = event.target.files[0];
    if (file){
      setCV(file)
    }
  }

  const cvConfirmHandler = () =>{
    if (CV !== ''){
      setCVPasted(true)
    } else {
      setCVPasted(false)
    }
    setCVModel(false)
  }

  const cvmodelCloseHAndler = () =>{
    setCVModel(false)
  }


  return (
    <>
      <AuthWrapper bg="#000" containerEnable={false}>
        <Grid container xs={12}>
          <Grid item xs={12} sm={6}>
            <Typography className='text_' sx={{...typoSX}} >
              Evaluate a CV of
            </Typography>
            <Typography className='text_' sx={{...typoSX}}>
              a candidate with AI
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container xs={12}  direction="column" sx={{textAlign:{xs:"center",sm:"center",}}}>
              <Grid item xs={6}  sm={6}>
                <Button variant="contained" onClick={()=>{jobDescriptionModelHandler()}} sx={{width:"185px",padding:"10px 29px",background:jobDescriptionPasted?"linear-gradient(to bottom, #185421,#077e1a);":"#3a3a3a",textTransform:"capitalize"}}>
                  { !jobDescriptionPasted?"Paste your job description":"Job description Paste!"}
                </Button>
              </Grid>
              <Grid item xs={6} mt={"20px"} mb={"20px"} sm={6}>
                <Button
                  component="label"
                  onClick={()=>{cvModelOpenHandler()}}
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  sx={{width:"185px",padding:CVPasted?"22px 36px":"10px 36px",background:CVPasted?"linear-gradient(to bottom, #185421,#077e1a);":"#3a3a3a",textTransform:"capitalize"}}
                >
                  { CVPasted ?"CVs Uploaded!":'Upload some CV'}
                </Button>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Button variant="contained" className='cvanalyzer_btn' sx={{width:"185px",padding:"12px 47px",bgcolor:"#077e1a",flexWrap:"wrap",textTransform:"capitalize"}}>
                  Analyze <Box fontSize={"10px"}>(10 tokens)</Box>
                </Button>
              </Grid>
            </Grid>
          </Grid>
      </Grid>
      </AuthWrapper>
      <CustomeModel open={jobDescriptionModel} modelClose={jobmodelCloseHAndler} >
        <Grid container xs={12}>
          <Grid item xs={12} sm={12}>
            <TextField
              id="standard-multiline-static"
              multiline
              rows={10}
              variant="standard"
              fullWidth={true}
              onChange={(event)=>jobDescriptionHandler(event)}
              value={jobDescription}
            />
          </Grid>
          <Grid container xs={12} textAlign={"center"} direction={"row"} mt={"20px"} justifyContent={"center"}>
            <Grid item xs={6}  sm={4}>
              <Button variant="contained" sx={{bgcolor:"#000"}}  onClick={()=>{jobDescriptionConfirmHandler()}}>Confirm</Button>
            </Grid>
            <Grid item xs={6}  sm={4} onClick={()=>{jobmodelCloseHAndler()}}>
              <Button variant="contained"sx={{bgcolor:"#3a3a3a"}}>Cancel</Button>
            </Grid>
          </Grid>
        </Grid>
      </CustomeModel>
      <CustomeModel open={CVModel} modelClose={jobmodelCloseHAndler} >
        <Grid container xs={12}>
          <Grid item xs={12} sm={12} m={10} textAlign={"center"}>
            <Button
                component="label"
                onChange={(event)=>{uploadCVandler(event)}}
                role={undefined}
                variant="outlined"
                tabIndex={-1}
                className='cvBtn'
              >
                Open File
              <VisuallyHiddenInput type="file" />
            </Button>
          </Grid>
          <Grid container xs={12} textAlign={"center"} direction={"row"} mt={"20px"} justifyContent={"center"}>
            <Grid item xs={6}  sm={4}>
              <Button variant="contained" sx={{bgcolor:"#000"}}  onClick={()=>{cvConfirmHandler()}}>Confirm</Button>
            </Grid>
            <Grid item xs={6}  sm={4} onClick={()=>{cvmodelCloseHAndler()}}>
              <Button variant="contained"sx={{bgcolor:"#3a3a3a"}}>Cancel</Button>
            </Grid>
          </Grid>
        </Grid>
      </CustomeModel>
    </>
  )
}
