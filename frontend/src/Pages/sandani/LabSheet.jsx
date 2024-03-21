import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileNavbar from '../../Components/ProfileNavbar';

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
        <div onClick={() => handleYearClick('Year 1')} className="max-w-xs cursor-pointer bg-[#06C6D5] p-9 rounded-lg hover:bg-[#2df1ff]">
          <h4 className="text-xl text-black font-bold">1st Year</h4>
          <p className="text-black">Click for Year 1 content.</p>
        </div>
        <div onClick={() => handleYearClick('Year 1')} className="max-w-xs cursor-pointer bg-[#06C6D5] p-9 rounded-lg hover:bg-[#2df1ff]">
          <h4 className="text-xl text-black font-bold">2nd Year</h4>
          <p className="text-black">Click for Year 2 content.</p>
        </div>
        <div onClick={() => handleYearClick('Year 1')} className="max-w-xs cursor-pointer bg-[#06C6D5] p-9 rounded-lg hover:bg-[#2df1ff]">
          <h4 className="text-xl text-black font-bold">3rd Year</h4>
          <p className="text-black">Click for Year 3 content.</p>
        </div>
        <div onClick={() => handleYearClick('Year 1')} className="max-w-xs cursor-pointer bg-[#06C6D5] p-9 rounded-lg hover:bg-[#2df1ff]">
          <h4 className="text-xl text-black font-bold">4th Year</h4>
          <p className="text-black">Click for Year 4 content.</p>
        </div>
      </>
    );
  };

  const renderSems = () => {
    return (
      <>
        <div onClick={() => handleSemClick('01')} className="max-w-xs cursor-pointer bg-[#06C6D5] p-6 rounded-lg hover:bg-[#2df1ff]">
          <h5 className="text-lg text-black font-bold">Semester 1</h5>
          <p className="text-black">Content for Semester 1.</p>
        </div>
        <div onClick={() => handleSemClick('01')} className="max-w-xs cursor-pointer bg-[#06C6D5] p-6 rounded-lg hover:bg-[#2df1ff]">
          <h5 className="text-lg text-black font-bold">Semester 1</h5>
          <p className="text-black">Content for Semester 1.</p>
        </div>
      </>
    );
  };

  const renderModules = () => {
    return (
      <>
        <div onClick={() => handleModuleClick('DS')} className="max-w-xs cursor-pointer bg-[#06C6D5] p-6 rounded-lg hover:bg-[#2df1ff]">
          <h5 className="text-lg text-black font-bold">DS Module</h5>
          <p className="text-black">Database Systems - IT3020 [2023/FEB].</p>
        </div>
        <div onClick={() => handleModuleClick('DS')} className="max-w-xs cursor-pointer bg-[#06C6D5] p-6 rounded-lg hover:bg-[#2df1ff]">
          <h5 className="text-lg text-black font-bold">ITPM Module</h5>
          <p className="text-black">IT Project Management - IT3040 [2023/FEB].</p>
        </div>
        <div onClick={() => handleModuleClick('DS')} className="max-w-xs cursor-pointer bg-[#06C6D5] p-6 rounded-lg hover:bg-[#2df1ff]">
          <h5 className="text-lg text-black font-bold">NDM Module</h5>
          <p className="text-black">Network Design and Management - IT3010 [2023/FEB].</p>
        </div>
        <div onClick={() => handleModuleClick('DS')} className="max-w-xs cursor-pointer bg-[#06C6D5] p-6 rounded-lg hover:bg-[#2df1ff]">
          <h5 className="text-lg text-black font-bold">PAF Module</h5>
          <p className="text-black">Programming Applications and Frameworks - IT3030 [2023/FEB].</p>
        </div>
      </>
    );
  };

  const renderSessions = () => {
    return (
      <>
        <Link to="/admin/sandani/learning_portal">
          <div className="max-w-xs cursor-pointer bg-[#06C6D5] p-6 rounded-lg hover:bg-[#2df1ff]">
            <h5 className="text-lg text-black font-bold">Session 1</h5>
            <p className="text-black">Some random content for Session 1.</p>
          </div>
        </Link>
        <Link to="/admin/sandani/learning_portal">
          <div className="max-w-xs cursor-pointer bg-[#06C6D5] p-6 rounded-lg hover:bg-[#2df1ff]">
            <h5 className="text-lg text-black font-bold">Session 1</h5>
            <p className="text-black">Some random content for Session 1.</p>
          </div>
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
      <div className="flex justify-center mt-14">
         <h4 className="text-2xl text-white font-bold mb-4">Course Category</h4>
      </div>
      {view !== 'years' && (
      <button
      className="fixed bottom-10 left-16 z-10 bg-[#06C6D5] text-black font-bold px-8 py-2 rounded-lg hover:bg-[#2df1ff]"
      onClick={handleBackButtonClick}
    >
      Back
    </button>
    
      )}

      <div className="flex justify-center items-start min-h-screen pt-24">
        <div className="max-w-4xl w-full flex justify-center gap-4 flex-wrap">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default LabSheet;
