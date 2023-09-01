'use client'
import { Icon } from '@iconify/react';
import { useState } from 'react';
export default function CareerApplicationComponent() {
    const [statusMessage, setStatusMessage] = useState('');
    const [uploadedFileCount, setUploadedFileCount] = useState(0);
  
    const handleFileChange = (event) => {
      const files = event.target.files;
  

        let errorMessage = '';
        let uploadedCount = 0;
  
        for (let i = 0; i < files.length; i++) {
   
  
          if (files.length > 5) {
         
            errorMessage = `A maximum of 5 files are allowed`;
            break;
          } else {
            uploadedCount++;
          }
        }
  
        if (errorMessage) {
          alert(errorMessage);
        } else {
          alert(`Uploaded ${uploadedCount} file(s) successfully!`);
  
          // Your code for uploading the files to the remote server (e.g. AWS S3)
          setUploadedFileCount(uploadedCount);
        }
     
    };
    
    return (
        <>
            {/* <Header/> */}
            <div className=" px-4 ss:px-8 lg:px-16 mt-4 mb-32 text-black ">
                <div className="mt-[86px] sm:mt-[118px]">
                    <h1 className="rany text-4xl font-medium lg:text-7xl callcenter-h1 text-black italic">
                        Application Form
                    </h1>
                    <div className="mt-10 flex flex-col lg:flex-row md:flex-row">
                        <div className="basis-1/2 px-10">
                            <div className="mb-5">
                                <label className="font-semibold text-black required">Job Title <span className="text-red-500">*</span></label>
                                <input id="jobTitle" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"/>
                            </div>
                            <div className="mb-5">
                                <label className="font-semibold text-black required">Name <span className="text-red-500">*</span></label>
                                <input id="name" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"/>
                            </div>
                            <div className="mb-5">
                                <label className="font-semibold text-black required">Phone No <span className="text-red-500">*</span></label>
                                <input id="phone" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"/>
                            </div>
                            <div className="mb-5">
                                <label className="font-semibold text-black required">Email <span className="text-red-500">*</span></label>
                                <input id="email" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"/>
                            </div>
                            <div className="mb-5">
                                <label className="font-semibold text-black required">Gender <span className="text-red-500">*</span></label>
                                <input id="gender" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"/>
                            </div>
                            <div className="mb-5">
                                <label className="font-semibold text-black required">Marital Stauts <span className="text-red-500">*</span></label>
                                <input id="maritalStatus" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"/>
                            </div>
                            <div className="mb-5">
                                <label className="font-semibold text-black required">Date of Birth <span className="text-red-500">*</span></label>
                                <input id="DateofBirth" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"/>
                            </div>
                            <div className="mb-5">
                                <label className="font-semibold text-black required">NRC No <span className="text-red-500">*</span></label>
                                <input id="NRC" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"/>
                            </div>
                            <div className="mb-5">
                                <label className="font-semibold text-black required">Photo <span className="text-red-500">*</span></label>
                                <input type='file' id="photo" className="custom-file-input placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"/>
                            </div>
        


                        </div>
                        <div className="basis-1/2 px-10">
                            <div className="mb-5">
                                <label className="font-semibold text-black required">Passport No</label>
                                <input id="passport" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"/>
                            </div>
                            <div className="mb-5">
                                <label className="font-semibold text-black required">Nationality<span className="text-red-500">*</span></label>
                                <input id="nationality" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"/>
                            </div>
                            <div className="mb-5">
                                <label className="font-semibold text-black required">Religion<span className="text-red-500">*</span></label>
                                <input id="religion" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"/>
                            </div>
                            <div className="mb-5">
                                <label className="font-semibold text-black required">Address <span className="text-red-500">*</span></label>
                                <input id="address" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"/>
                            </div>
                            <div className="mb-5">
                                <label className="font-semibold text-black required">Expected Salary </label>
                                <input id="expectedSalary" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"/>
                            </div>
                            <div className="mb-5">
                                <label className="font-semibold text-black required">Work Experience</label>
                                <input id="workExp" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"/>
                            </div>
                            <div className="mb-5">
                                <label className="font-semibold text-black required">Career Objective</label>
                                <input id="CareerObjective" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"/>
                            </div>
                            <div className="mb-5">
                                <label className="font-semibold text-black required">Education</label>
                                <input id="Education" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"/>
                            </div>
                            <div className="mb-5">
                                <label className="font-semibold text-black required">Attachment ( {uploadedFileCount}/5 )</label>
                                <input type='file' id="file-input" onChange={handleFileChange} multiple className="custom-file-input placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"/>
                            </div>
        


                        </div>
                
                
                    </div>
                    <div className="flex justify-center mt-[25px] sm:mb-[48px] pb-10">
                        <button
                            className="flex items-center gap-1 border border-solid border-black hover:bg-black hover:text-white rounded-full px-2 py-1 text-black"
                            type="submit"
                        >
                            send to us <Icon icon="quill:send" />
                        </button>
                    </div>
                </div>

            </div>
            {/* <Footer/> */}
        </>
    )

}

// mt-[86px] sm:mt-[118px]