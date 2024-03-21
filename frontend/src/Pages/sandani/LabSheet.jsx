import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileNavbar from '../../Components/ProfileNavbar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const LabSheet = () => {
  const [view, setView] = useState('years');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSem, setSelectedSem] = useState('');
  const [selectedModule, setSelectedModule] = useState('');

  const handleYearClick = (year) => {
    setSelectedYear(year);
    setView('semesters');
  };

  const handleSemClick = (sem) => {
    setSelectedSem(sem);
    setView('modules');
  };

  const handleModuleClick = (module) => {
    setSelectedModule(module);
    setView('sessions');
  };

  const handleBackButtonClick = () => {
    switch (view) {
      case 'semesters':
        setView('years');
        setSelectedYear('');
        break;
      case 'modules':
        setView('semesters');
        setSelectedSem('');
        break;
      case 'sessions':
        setView('modules');
        setSelectedModule('');
        break;
      default:
        break;
    }
  };

  const renderYears = () => {
    return (
      <>
        <Card onClick={() => handleYearClick('Year 1')} sx={{ maxWidth: 400, cursor: 'pointer', backgroundColor: '#06C6D5' }}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" color="text.primary">
              1st Year
            </Typography>
            <Typography variant="body2" color="text.primary">
              Some random content for Year 1.
            </Typography>
          </CardContent>
        </Card>
        <Card onClick={() => handleYearClick('Year 2')} sx={{ maxWidth: 400, cursor: 'pointer', backgroundColor: '#06C6D5' }}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" color="text.primary">
            2nd Year
            </Typography>
            <Typography variant="body2" color="text.primary">
              Some random content for Year 2.
            </Typography>
          </CardContent>
        </Card>
        <Card onClick={() => handleYearClick('Year 3')} sx={{ maxWidth: 400, cursor: 'pointer', backgroundColor: '#06C6D5' }}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" color="text.primary">
            3rd Year
            </Typography>
            <Typography variant="body2" color="text.primary">
              Some random content for Year 3.
            </Typography>
          </CardContent>
        </Card>
        <Card onClick={() => handleYearClick('Year 4')} sx={{ maxWidth: 400, cursor: 'pointer', backgroundColor: '#06C6D5' }}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" color="text.primary">
            4th Year
            </Typography>
            <Typography variant="body2" color="text.primary">
              Some random content for Year 4.
            </Typography>
          </CardContent>
        </Card>
      </>
    );
  };
  
  const renderSems = () => {
    return (
      <>
        <Card onClick={() => handleSemClick('01')} sx={{ maxWidth: 275, cursor: 'pointer', backgroundColor: '#06C6D5' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Semester 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Some random content for Semester 1.
            </Typography>
          </CardContent>
        </Card>
        <Card onClick={() => handleSemClick('02')} sx={{ maxWidth: 275, cursor: 'pointer', backgroundColor: '#06C6D5' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Semester 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Some random content for Semester 2.
            </Typography>
          </CardContent>
        </Card>
      </>
    );
  };

  
  const renderModules = () => {
    return (
      <>
        <Card onClick={() => handleModuleClick('DS')} sx={{ maxWidth: 275, cursor: 'pointer', backgroundColor: '#06C6D5' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              DS Module
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Some random content for DS module.
            </Typography>
          </CardContent>
        </Card>
        <Card onClick={() => handleModuleClick('EAP')} sx={{ maxWidth: 275, cursor: 'pointer', backgroundColor: '#06C6D5' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              EAP Module
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Some random content for EAP module.
            </Typography>
          </CardContent>
        </Card>
        <Card onClick={() => handleModuleClick('SE')} sx={{ maxWidth: 275, cursor: 'pointer', backgroundColor: '#06C6D5' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              SE Module
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Some random content for SE module.
            </Typography>
          </CardContent>
        </Card>
        <Card onClick={() => handleModuleClick('ER')} sx={{ maxWidth: 275, cursor: 'pointer', backgroundColor: '#06C6D5' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ER Module
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Some random content for ER module.
            </Typography>
          </CardContent>
        </Card>
      </>
    );
  };

  const renderSessions = () => {
    return (
      <>
        <Link to="/admin/sandani/learning_portal">
          <Card sx={{ maxWidth: 275, cursor: 'pointer', backgroundColor: '#06C6D5' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Session 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Some random content for Session 1.
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link to="/admin/sandani/learning_portal">
          <Card sx={{ maxWidth: 275, cursor: 'pointer', backgroundColor: '#06C6D5' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Session 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Some random content for Session 2.
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link to="/admin/sandani/learning_portal">
          <Card sx={{ maxWidth: 275, cursor: 'pointer', backgroundColor: '#06C6D5' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Session 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Some random content for Session 3.
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </>
    );
  };

  const renderContent = () => {
    switch (view) {
      case 'years':
        return renderYears();
      case 'semesters':
            return renderSems();
      case 'modules':
        return renderModules();
      case 'sessions':
        return renderSessions();
      default:
        return null;
    }
  };

  return (
    <div>
      <ProfileNavbar />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
         <Typography variant="h4" gutterBottom style={{ color: '#FFFFFF' }}>
             Course Category
        </Typography>
      </Box>
      {view !== 'years' && (
        <Button
        variant="contained"
        color="primary"
        startIcon={<ArrowBackIcon />}
        onClick={handleBackButtonClick}
        sx={{ position: 'fixed', top: '640px', left: '20px', zIndex: 1000, backgroundColor: '#06C6D5', color: 'black' }}
      >
        Back
      </Button>
      
      )}

      {/* Add Course Category heading */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 60px)', paddingTop: '20px' }}>
        <Box sx={{ maxWidth: '80%', width: '100%' }}>
          <Box sx={{ display: 'flex',top: '600px', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {renderContent()}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default LabSheet;
