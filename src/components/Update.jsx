import React, { useState } from "react";
import Layout from "./Layout";
import { userData } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../reducers/userDataReducer";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Update = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.userData.data)[0];
  const [uName, setUname] = useState(user.name);
  const [uProfession, setUprofession] = useState(user.profession);
  const [uPhone, setUphone] = useState(user.phone);
  const [uEmail, setUemail] = useState(user.email);
  const [uAbout, setUabout] = useState(user.about);
  const [uSkills, setUskills] = useState(user.skills.join(', '));
  const [image, setImage] = useState(null);
  const [uResume, setUResume] = useState(null);

  const initialSocialState = user.social.map((socialItem) => ({
    name: socialItem.name,
    link: socialItem.link,
  }));

  const [uSocial, setUSocial] = useState(initialSocialState)

  const initialExperienceState = user.experience.map((experienceItem)=>({
    title:experienceItem.title,
    companyName:experienceItem.companyName,
    time:experienceItem.time,
    desc:experienceItem.desc
  }))

  const [uExperience, setUExperience] = useState(initialExperienceState)

  //handle Resume Change
  const handleResumeChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Create a Blob or File object
      const blob = new Blob([file], { type: file.type });

      // Use createObjectURL with the Blob object
      const resumeUrl = URL.createObjectURL(blob);

      // Set the resumeUrl in the state
      setUResume(resumeUrl);
    }
  };

  //Showing and Uploading Image
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Create a Blob or File object
      const blob = new Blob([file], { type: file.type });

      // Use createObjectURL with the Blob object
      const imageUrl = URL.createObjectURL(blob);

      // Set the imageUrl in the state
      setImage(imageUrl);
    }
  };

  //Setting Skills
  const handleSkillsChange = (e) => {
    setUskills(e.target.value);
  };

   // Handle change for uSocial
   const handleSocialChange = (index, key, value) => {
    const updatedSocial = [...uSocial];
    updatedSocial[index][key] = value;
    setUSocial(updatedSocial);
  };

  // Handle change for uExperience
  const handleExperienceChange = (index, key, value) => {
    const updatedExperience = [...uExperience];
    updatedExperience[index][key] = value;
    setUExperience(updatedExperience);
  };


  const dispatch = useDispatch();
  const handleSubmit =  () => {
    try {
      // Prepare the updated data based on the user input
    const updatedData = {
      name: uName,
      profession: uProfession,
      phone: uPhone,
      email: uEmail,
      about: uAbout,
      skills: uSkills.split(',').map((skill) => skill.trim()), // Assuming skills is an array
      image: image, // Assuming image is a URL or Blob
      resume: uResume, // Assuming uResume is a URL or Blob
      social: uSocial, // Assuming user.social is an array of social links
      experience: uExperience, // Assuming user.experience is an array of experience objects
    };

    // Dispatch the updateUserData action
    dispatch(updateUserData({ id: user.id, updatedData }));
    message.success("User Data Updated")

    // Update local storage
    const updatedUserData = {
      ...user,
      ...updatedData,
    };
    localStorage.setItem("userData", JSON.stringify(updatedUserData));

    navigate("/")
    } catch (error) {
      console.log(error)
    }
    
  };

  console.log(uSkills)
  return (
    <Layout>
      <section className="bg-gray-50 dark:bg-gray-900 overflow-y-auto">
        <div className="h-[80vh] grid grid-cols-3 w-[1152px] gap-4 mx-auto items-center">
          <div className="mb-6">
            <label
              htmlFor="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="default-input"
              value={uName}
              onChange={(e)=>setUname(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Profession
            </label>
            <input
              type="text"
              id="default-input"
              value={uProfession}
              onChange={(e)=>setUprofession(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone
            </label>
            <input
              type="text"
              id="default-input"
              value={uPhone}
              onChange={(e)=>setUphone(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="default-input"
              value={uEmail}
              onChange={(e)=>setUemail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              About Yourself
            </label>
            <textarea
              type="text"
              cols={3}
              rows={3}
              id="default-input"
              value={uAbout}
              onChange={(e)=>setUabout(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex overflow-hidden object-contain flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              {image ? (
                <img src={image} alt="" />
              ) : (
                <img src={user.image} alt="" />
              )}
              <input
                id="dropzone-file"
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          <div className="mb-6">
            <div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="file_input"
                >
                  Resume
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                  accept=".pdf, .docx"
                  onChange={handleResumeChange}
                />
                {uResume && (
        <div>
          <a href={uResume} target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </div>
      )}
                <p
                  className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="file_input_help"
                >
                  PDF or DOCX
                </p>
              </div>
            </div>
          </div>
          <div className="mb-6">
          <div>
      <form>
        <label htmlFor="skillsInput">Enter your skills (separated by commas):</label>
        <input
          type="text"
          id="skillsInput"
          value={uSkills}
          onChange={handleSkillsChange}
          placeholder="e.g., JavaScript, React, Node.js"
        />
      </form>
    </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Social Links:
            </label>
            {uSocial.map((item, index)=>{
              return (<div className="flex gap-2 mb-2"><input
              type="text"
              id="default-input"
              value={item.name}
              onChange={(e) =>handleSocialChange(index, 'name', e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              type="text"
              id="default-input"
              value={item.link}
              onChange={(e) =>handleSocialChange(index, 'link', e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            </div>)
            })}
          </div>
          <div className="mb-6 col-span-3">
            <label
              htmlFor="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Experince
            </label>
            {uExperience.map((item, index)=>{
              return(
                <div className="flex gap-2 mb-4">
                  <input
              type="text"
              id="default-input"
              value={item.title}
              onChange={(e) =>handleExperienceChange(index, 'title', e.target.value)}
              className="bg-gray-50 border w-[19%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              type="text"
              id="default-input"
              value={item.companyName}
              onChange={(e) =>handleExperienceChange(index, 'companyName', e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[19%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              type="text"
              id="default-input"
              value={item.time}
              onChange={(e) =>handleExperienceChange(index, 'time', e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[19%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <textarea type="text" value={item.desc} onChange={(e) =>handleExperienceChange(index, 'desc', e.target.value)} className="w-[40%]"/>
                </div>
              )
            })}
          </div>
        <button type="button" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 col-span-3 mx-auto">Update</button>
        </div>
      </section>
    </Layout>
  );
};

export default Update;
