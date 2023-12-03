import React, { useState } from "react";
import Layout from "./Layout";
import { userData } from "../../data";
import { useDispatch, useSelector } from "react-redux";

const Update = () => {
  const user = useSelector((state) => state.userData)[0];
  console.log(userData);
  const [uName, setUname] = useState("");
  const [uProfession, setUprofession] = useState("");
  const [uPhone, setUphone] = useState("");
  const [uEmail, setUemail] = useState("");
  const [uAbout, setUabout] = useState("");
  const [uSkills, setUskills] = useState('');
  const [image, setImage] = useState(null);

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

  const handleSkillSubmit = (e) => {
    e.preventDefault();
    // You can process the skills as needed, e.g., store in state, send to API, etc.
    const skillsArray = uSkills.split(',').map(skill => skill.trim());
    console.log('Skills:', skillsArray);
  };


  const dispatch = useDispatch();
  return (
    <Layout>
      <section className="bg-gray-50 dark:bg-gray-900">
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
              value={user.name}
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
              value={user.profession}
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
              value={user.phone}
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
              value={user.email}
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
              value={user.about}
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
                />
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
      <form onSubmit={handleSkillSubmit}>
        <label htmlFor="skillsInput">Enter your skills (separated by commas):</label>
        <input
          type="text"
          id="skillsInput"
          value={uSkills}
          onChange={handleSkillsChange}
          placeholder="e.g., JavaScript, React, Node.js"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
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
              value={user.phone}
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
              value={user.phone}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Update;
