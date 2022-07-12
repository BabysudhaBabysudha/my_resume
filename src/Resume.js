import React from "react";
// import ReactDOM  from "react-dom";
import Image from './Babysudha.jpg'
//import DarkModeToggle from "react-dark-mode-toggle";
import './App.css'
import ProfessionalSkill from './ProfessionalSkill'
class Resume extends React.Component{
//     constructor(){
// super();
//     }
    render(){
        return(
            <body>
                <div className="heading">
                
                    <div className="jumbotron text-center" id="heading">
                        <ul className="nav nav-justified col-sm-4" id="navigation">
                            <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" href="https://github.com/BabysudhaBabysudha">Project</a>
                            </li>
                            {/* <li className="nav-item">
                            <a className="nav-link active" href="/youtube">youtube</a>
                            </li> */}
                            <li className="nav-item">
                            <a className="nav-link active" href="#fooder">Contact</a>
                            </li> 
                        </ul>
                        <h1 className="myname">Hai<span style={{'fontSize':30}}>&#128075;</span>,This Is Babysudha P</h1>
                        <p className="myoccupation">Software Developer</p>
                    </div>
                    </div>
                    <div className="container center">
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="rounded-circle">
                                    <div className="img-wrapper">
                                    <img src={Image} className="rounded-circle mx-auto d-block" alt="my photo" width="300px" height="300px">
                                    </img>
                                    </div>
                                </div>
                                <br></br>
                            </div>
                            <div className="col-sm-7"><h2 className="myskills">Career Objectives</h2>
                            <p className="skills">To work in a professional environmental where i can find myself in decisive opportunities for creating value added carrer for myself and extend quality service to my organization.
                            </p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2 className="myskills">Technical Skills :</h2><br/>
                                    <ul className="skils">
                                        <li>
                                       Front End Languages:- HTML,CSS,JavaScript,Reactjs     
                                        </li>
                                        <li>
                                            Back End Languages:- Python
                                        </li>
                                        <li>
                                            DataBase:- MYSQL
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <h2 className="myskills">Internship And Certification :</h2><br/>
                                  <ul className="skills">
                                    <li>I done Web Development intern in Azure soft tech solution Software
                                    </li>
                                  </ul>
                                </div>
                                 <br/>
                                 <div className='col-sm-12'>
                        <h2 className='myskills'>Professional Skills :</h2><br/>
                            <ProfessionalSkill />
                    </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br/>
                                <div className="col-sm-12">
                                    <h2 className="myskills">My Project :</h2><br/>
                                    <table className="table table-dark table-striped">
                                        <thead>
                                            <tr>
                                                <th>Project Domain</th>
                                                <th>Programming Language</th>
                                                <th>Project Link</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Front End Web Development</td>
                                                <td>HTML,CSS,JavaScript,Boostrap,Reactjs</td>
                                                <td><a href={"https://github.com/BabysudhaBabysudha/my_resume"}></a>Resume Application</td>
                                            </tr>
                                            <tr>
                                                <td>Front End Web Development</td>
                                                <td>HTML,CSS,JavaScript,Reactjs</td>
                                                <td><a href={"https://github.com/"}></a>Link Application</td>
                                            </tr>
                                            <tr>
                                                <td>Front End Web Development</td>
                                                <td>HTML,CSS,JavaScript,Reactjs</td>
                                                <td><a href={"https://github.com/"}></a>Todolist application</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-sm-12">
                                    <h2 className="myskills">Educational Qualification :</h2><br/>
                                    <table className="table table-dark table-striped">
                                        <thead>
                                            <tr>
                                                <th>Degree</th>
                                                <th>Institution</th>
                                                <th>Year of Passing</th>
                                                <th>Percentage</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Master Of Computer Application</td>
                                                <td>Kalasalingam Academic Research and Education</td>
                                                <td>2022</td>
                                                <td>85%</td>
                                            </tr>
                                            <tr>
                                                <td>BSc Phy </td>
                                                <td>Nms SVC College</td>
                                                <td>2020</td>
                                                <td>73%</td>
                                            </tr>
                                            <tr>
                                                <td>HSS</td>
                                                <td>P.K. Higher Secondray School</td>
                                                <td>2017</td>
                                                <td>74%</td>
                                            </tr>
                                            <tr>
                                                <td>SSLC</td>
                                                <td>P.K. Higher Secondray School</td>
                                                <td>2015</td>
                                                <td>89%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jumbotron text-center" id="fooder">
                     <ul className="nav justify-content-center">
                       
                           <li className="nav-item">
                            <a href="https://wa.me/916380177670" className="fa fa-whatsapp nav-link" style={{color:"blue"}}></a>
                            </li>
                            <li className="nav-item">
                            <a href="mailto:p.sudha0100@gmail.com" className="fa fa-envelope nav-link" style={{color:"blue" }}></a>
                            </li>
                            <li className="nav-item">
                            <a href="https://www.instagram.com/pretty_sudha" className="fa fa-instagram nav-link" style={{color:"blue"}}></a>
                            </li>
                     </ul>
                     <div className='text-center' style={{padding:"30px"}}>
                copywrite ©  Sudha 2022
            </div>
                    </div>
                
            </body>
        )
    }
} 
export default Resume;