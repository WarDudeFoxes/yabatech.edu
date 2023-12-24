import { loginData } from "../Data/login-data.js";
import { studentData } from "../Data/student-data.js";
import { alertNote } from "./passport-upload.js";


export function genProfileHTML() {
  console.log(loginData);
  let matchingData;
  loginData.forEach(login => {
    studentData.forEach(data => {
      if (login.phoneNumber === data.phoneNumber) {
        matchingData = data
      }
    });
  });
  
  let profileHTML = '';
  
  profileHTML += 
    `
    <div class="content-container">
      <div class="dashboard-content">
        <div class="profile-column">
          <div class="image-number-cont">
            <img src="${matchingData.image}" alt="" class="column-pics">
            <i class="fas fa-circle-user fa-6x hide column-icon"></i>
            <span class="phone-number">${matchingData.phoneNumber}</span>
          </div>
          <div class="name-course-programe">
            <div class="profile-name-cap">
              ${(matchingData.surname).toUpperCase()} ${(matchingData.firstName).toUpperCase()}
            </div>
            <div class="programe-course">
              <span class="programe-type">${matchingData.programType}</span>(<span class="programe">${(matchingData.program).toUpperCase()}</span>)
            </div>
          </div>
          <div class="course-materials">
            <span>Course materials not available</span>
          </div>
  
          <div class="session-container">
            <div class="cont">
              <div class="title">Academic session:</div>
              <div class="session-status">
                <i class="fas fa-circle-arrow-right"></i>
                <span>2022/2023</span>
              </div>
            </div>
            <div class="cont">
              <div class="title">Current semester:</div>
              <div class="session-status">
                <i class="fas fa-circle-arrow-right"></i>
                <span>FIRST SEMESTER</span>
              </div>
            </div>
            <div class="cont">
              <div class="title">Current Level:</div>
              <div class="session-status">
                <i class="fas fa-circle-arrow-right"></i>
                <span>${matchingData.programType} 1</span>
              </div>
            </div>
            <div class="cont">
              <div class="title">Student Status:</div>
              <div class="session-status">
                <i class="fas fa-circle-arrow-right"></i>
                <span>Active</span>
              </div>
            </div>
            <div class="cont">
              <div class="title">School fees status:</div>
              <div class="session-status">
                <i class="fas fa-circle-arrow-right"></i>
                <span>NOT PAID</span>
              </div>
            </div>
            <div class="cont">
              <div class="title">Hostel status:</div>
              <div class="session-status">
                <i class="fas fa-circle-arrow-right"></i>
                <span>NOT APPLIED</span>
              </div>
            </div>
            <div class="cont">
              <div class="title">Course registration status:</div>
              <div class="session-status">
                <i class="fas fa-circle-arrow-right"></i>
                <span>REGISTERED</span>
              </div>
            </div>
          </div>
        </div>
  
        <div class="dashboard-options-column hie">
          <div class="dash-row">
            <div class="title">Dashboard</div>
            <div class="data-fee-container">
              <div class="biodata-link js-biodata-link">
                <img src="Images/user.svg" alt="">
                <div class="text">
                  <span>Biodata</span>
                  <small>Here you can see your biodata details.</small>
                </div>
              </div>
              <div class="payment-receipt">
                <img src="Images/money_2.svg" alt="">
                <div class="text">
                  <span>Fee payments & Receipts</span>
                  <small>Make your school fees payment here</small>
                </div>
              </div>
            </div>
          </div>
  
          <div class="course-row">
            <div class="title">
              Course registration & exam docket
            </div>
            <div class="data-fee-container">
              <div class="biodata-link">
                <img src="Images/checklist2.svg" alt="">
                <div class="text">
                  <span>Course registration</span>
                  <small>Register and print your course here</small>
                </div>
              </div>
            </div>
          </div>
  
          <div class="dash-row">
            <div class="title">Hostel application & Payment confirmation</div>
            <div class="data-fee-container">
              <div class="payment-receipt">
                <img src="Images/hostel.svg" alt="">
                <div class="text">
                  <span>Hostel Accomodation</span>
                  <small>Payments and registyration for hostel here.</small>
                </div>
              </div>
              <div class="payment-receipt">
                <img src="Images/checklist.svg" alt="">
                <div class="text">
                  <span>Payment Confirmation</span>
                  <small>Confirm all payment here</small>
                </div>
              </div>
            </div>
          </div>
          <div class="dash-row">
            <div class="title">Result Checker & Transcript</div>
            <div class="data-fee-container">
              <div class="payment-receipt">
                <img src="Images/result.svg" alt="">
                <div class="text">
                  <span>My Result</span>
                  <small>Print all your previous results here.</small>
                </div>
              </div>
              <div class="payment-receipt">
                <img src="Images/award.svg" alt="">
                <div class="text">
                  <span>Transcript</span>
                  <small>Make your school fees payment here</small>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="biodata-cont hide">
          <div class="title">
            <span>Biodata</span>
          </div>
          <div class="data-row">
            <div class="column-1">
              <i class="fas fa-circle-arrow-right"></i>
              <span>Full Name:</span>
            </div>
            <div class="column-2">
              ${(matchingData.surname).toUpperCase()} ${(matchingData.firstName).toUpperCase()} ${(matchingData.otherName).toUpperCase()}
            </div>
          </div>
          <div class="data-row">
            <div class="column-1">
              <i class="fas fa-circle-arrow-right"></i>
              <span>Phone Number</span>
            </div>
            <div class="column-2">
              ${matchingData.phoneNumber}
            </div>
          </div>
          <div class="data-row">
            <div class="column-1">
              <i class="fas fa-circle-arrow-right"></i>
              <span>Programme type</span>
            </div>
            <div class="column-2">
              ${matchingData.programType} FULL TIME
            </div>
          </div>
          <div class="data-row">
            <div class="column-1">
              <i class="fas fa-circle-arrow-right"></i>
              <span>Session</span>
            </div>
            <div class="column-2">
              2023/2024
            </div>
          </div>
          <div class="data-row">
            <div class="column-1">
              <i class="fas fa-circle-arrow-right"></i>
              <span>School</span>
            </div>
            <div class="column-2">
              TECHNOLOGY
            </div>
          </div>
          <div class="data-row">
            <div class="column-1">
              <i class="fas fa-circle-arrow-right"></i>
              <span>Department</span>
            </div>
            <div class="column-2">
              ${(matchingData.program).toUpperCase()}
            </div>
          </div>
          <div class="data-row">
            <div class="column-1">
              <i class="fas fa-circle-arrow-right"></i>
              <span>Programme</span>
            </div>
            <div class="column-2">
            ${matchingData.programType} (${(matchingData.program).toUpperCase()})
            </div>
          </div>
          <div class="data-row">
            <div class="column-1">
              <i class="fas fa-circle-arrow-right"></i>
              <span>Level</span>
            </div>
            <div class="column-2">
            ${(matchingData.programType).toUpperCase()} 1
            </div>
          </div>
          <div class="data-row">
            <div class="column-1">
              <i class="fas fa-circle-arrow-right"></i>
              <span>Sex</span>
            </div>
            <div class="column-2">
              ${(matchingData.gender).toUpperCase()}
            </div>
          </div>
          <div class="data-row">
            <div class="column-1">
              <i class="fas fa-circle-arrow-right"></i>
              <span>Date of Birth</span>
            </div>
            <div class="column-2">
              ${matchingData.day}/${matchingData.month}/${matchingData.year}
            </div>
          </div>
          <div class="data-row">
            <div class="column-1">
              <i class="fas fa-circle-arrow-right"></i>
              <span>Email:</span>
            </div>
            <div class="column-2">
              ${matchingData.email}
            </div>
          </div>
          <div class="data-row">
            <div class="column-1">
              <i class="fas fa-circle-arrow-right"></i>
              <span>Residential address:</span>
            </div>
            <div class="column-2">
              ${(matchingData.homeAddress).toUpperCase()}
            </div>
          </div>
          <div class="data-row">
            <div class="column-1">
              <i class="fas fa-circle-arrow-right"></i>
              <span>State Of Origin</span>
            </div>
            <div class="column-2">
            ${(matchingData.stateElem).toUpperCase()}
            </div>
          </div>
          <div class="data-row">
            <div class="column-1">
              <i class="fas fa-circle-arrow-right"></i>
              <span>Local Goverment Area:</span>
            </div>
            <div class="column-2">
            ${(matchingData.localGovt).toUpperCase()}
            </div>
          </div>
  
          <div class="bio-data-options">
            <a href="#" class="print"><i class="fas fa-print print"></i><span class="print">Print</span></a>
            <a href="#" onclick="
              location.reload();
            "> <i class="fas fa-arrow-left"></i> <span>Go back</span></a>
          </div>
        </div>
  
        <div class="setting-container hide">
          <div class="passport-container">
            <div class="settings-title">
              <span>Upload passport</span>
            </div>
            <div class="settings-image-content">
              <div class="top-note">
                <i class="fa-solid fa-circle-info" aria-hidden="true">
                </i> 
                <span>
                  Click on the avatar to your passport, please note that  your passport must be clear with a size 150px by 150px
                </span>
              </div>
      
              <div class="image-container">
                <div class="upload-container">
                  <i class="fas fa-circle-user proile-avatar fa-5x hide"></i>
                  <input type="file" class="upload-image image-input">
                </div>
              
                <img src="${matchingData.image}" alt="" class="student-image ">
              </div>
            </div>
          </div>
  
          <div class="password-container">
            <div class="settings-title">
              <span>Change Password</span>
            </div>
            <div class="settings-password-content">
              <div class="password-top-note">
                <i class="fa-solid fa-circle-info" aria-hidden="true">
                </i> 
                <span>
                  Remember, your cureent password is your surname if you haven't change it previously
                </span>
                <div class="password-conatainer">
                  <input type="password" placeholder="Enter your current password here">
                  <input type="password" placeholder="Enter your new password here">
                  <input type="password" placeholder="Enter your new password again here">
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
    
  `;
  
  document.querySelector('.profile-html').innerHTML = profileHTML;

  document.querySelector('.profile-name').innerHTML = `${matchingData.surname} ${matchingData.firstName}`

  document.querySelector('.navbar-profile-image').setAttribute('src', `${matchingData.image}`)

  alertNote();
};