import logo from './logo.svg';
import './App.css';
import Resume from './component/Resume';
import Skills from './component/Skills';
import Education from './component/Education';
import Experience from './component/Experience';
import Extracurricular from './component/Extracurricular';

const resume={
  name:'Mayank',
  skills:['React.js','Node.js','MERN Stack'],
  experience:[{company:'google', year:'2022-2024',role:'SDE'},{company:'Microsoft', year:'2010-2022',role:'SDE'}],
  education:['Engineering','DSA'],
  extracurricular:['Sports','Guitar','Dance']
}

function App() {
  return (
    <>
      <Resume name={resume.name}/> 
      <Skills items={resume.skills} />
      <Education items={resume.education} />
      <Experience items={resume.experience} />
      <Extracurricular items={resume.extracurricular}/>
    </>
  );
}

export default App;
