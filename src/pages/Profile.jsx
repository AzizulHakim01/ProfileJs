import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { userData } from "../../data";

const Profile = () => {
  const [showContact, setShowContact] = useState(false);
  const user = userData[0];
  return (
    <Layout>
      <div className="bg-gray-100 h-[80vh]">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    src={user.image}
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  />
                  <h1 className="text-xl font-bold">{user.name}</h1>
                  <p className="text-gray-600">{user.profession}</p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <button
                      href="#"
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                      onClick={() => setShowContact(!showContact)}
                    >
                      Contact
                    </button>
                    <Link
                      to={"/"}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                    >
                      Resume
                    </Link>
                  </div>
                  <div
                    className={`text-gray-600 mt-6 ${
                      showContact ? "" : "hidden"
                    }`}
                  >
                    <p>Phone: {user.phone}</p>
                    <p>{user.email}</p>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="text-gray-600 uppercase font-bold tracking-wider mb-2">
                    Skills
                  </span>
                  <ul>
                    {user.skills.map((skill) => {
                      return (
                        <div className="flex justify-between">
                          <li className="mb-2">{skill.name}</li>
                          <p>{skill.level}</p>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">About Me</h2>
                <p className="text-gray-700">{user.about}</p>
                <h3 className="font-semibold text-center mt-3 -mb-2">
                  Find me on
                </h3>
                <div className="flex justify-center items-center gap-6 my-6">
                  {user.social.map((links) => {
                    return <Link to={links.link}>{links.name}</Link>;
                  })}
                </div>
                <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>

                {user.experience.map((exp) => {
                  return (
                    <div className="mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600 font-bold">
                          {exp.title}
                        </span>
                        <p>
                          <span className="text-gray-600 mr-2">
                            at {exp.companyName}
                          </span>
                          <span className="text-gray-600">{exp.time}</span>
                        </p>
                      </div>
                      <p className="mt-2">
                        {exp.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
