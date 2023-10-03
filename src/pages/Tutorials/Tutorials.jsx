import React, { useState, useEffect } from 'react';
import './tutorial.scss';

// icons==========
import DoNotDisturbOutlinedIcon from '@mui/icons-material/DoNotDisturbOutlined';

function Tutorials() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    courseTitle: '',
    video: null,
    featureImage: null,
    date: '',
  });
  const [courses, setCourses] = useState([]);

  // Function to handle the "View course" button click
  const handleViewCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleOpenAddCourseModal = () => {
    setIsAddCourseModalOpen(true);
  };

  const handleCloseAddCourseModal = () => {
    setIsAddCourseModalOpen(false);
  };

  const handleAddCourse = () => {
    // Add the new course to the list of courses
    setCourses((prevCourses) => [
      ...prevCourses,
      {
        ...newCourse,
        date: new Date().toLocaleDateString(), // Set the current date
      },
    ]);
  
    // Reset the newCourse state
    setNewCourse({
      courseTitle: '',
      video: null,
      featureImage: null,
    });
  
    // Close the modal
    handleCloseAddCourseModal();
  };

  useEffect(() => {
    // You can fetch course details based on the selectedCourse here
    // For now, I'll just show a placeholder message
    if (selectedCourse) {
      console.log(`Viewing course: ${selectedCourse.courseTitle}`);
    }
  }, [selectedCourse]);

  // variable to store chosen file name
  const [selectedVideoFileName, setSelectedVideoFileName] = useState('');
  const [selectedImageFileName, setSelectedImageFileName] = useState('');


  return (
    <div className='tutorialContainer'>
      <div className="tutorials">
        
        <div className="tutorialContent">
          <div className="tutorialLeft">
         
            <div className="Tutorialhead">
              <span className="pageTitle">Tutorial</span>
              <button className='CourseUploadBtn' onClick={handleOpenAddCourseModal}>Add new</button>
            </div>
            {courses.map((course, index) => (
              <div className="allCourses">
                <div className="tutorial" key={index}>
                <div className="mainContent">
                  <img className='tutorialAvatar' src={course.featureImage} alt="" />
                  <div className="TutorialTitle">
                    <span className="courseTitle">{course.courseTitle}</span>
                    <span className="courseDate">{course.date}</span>
                  </div>
                </div>
                <div className="Coursebutton" onClick={() => handleViewCourse(course)}>View course</div>
              </div>
              </div>
            ))}
          </div>
          <div className="tutorialRight">
            {selectedCourse ? (
              <div>
                <p className='titleTag'><span>Title:</span> {selectedCourse.courseTitle}</p>
                <p className='dateTag'>Date: {selectedCourse.date}</p>
                {selectedCourse.video && (
                  <video controls>
                    <source src={URL.createObjectURL(selectedCourse.video)} type="video/mp4" />
                  </video>
                )}
              </div>
            ) : (
              <div className='NothingContent'>
                <div className="NoticeContainer">
                   <DoNotDisturbOutlinedIcon className='doNotDisturbicon'/>
                   <span className="noItemText">Nothing to show</span>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
      {isAddCourseModalOpen && (
        <div className="modalOverlay">
          <div className="modal">
            <h2>Add New Course</h2>
         <div className="inputForm">
          <label  className="labelText">Course title</label>
         <input
              type="text"
              placeholder="Course Title"
              value={newCourse.courseTitle}
              onChange={(e) => setNewCourse({ ...newCourse, courseTitle: e.target.value })}
            />
            <div className="fileUploadInput">
            <label  className="labelText">Upload video</label>
            <label className="custom-file-upload">
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => {
                    setNewCourse({ ...newCourse, video: e.target.files[0] });
                    setSelectedVideoFileName(e.target.files[0].name); // Set the selected video's file name
                  }}
                />
                {selectedVideoFileName || 'Choose Video'} {/* Display the selected video's file name or 'Choose Video' */}
              </label>
              <label  className="labelText">Upload image</label>
              <label className="custom-file-upload">
                  <input
                    className='imageBtn'
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      setNewCourse({
                        ...newCourse,
                        featureImage: URL.createObjectURL(e.target.files[0]),
                      });
                      setSelectedImageFileName(e.target.files[0].name);
                    }}
                  />
                    {selectedImageFileName || 'Choose image'}
                </label>
            </div>
         </div>
            <div className="addcoursebtn">
              <button className='addBtn' onClick={handleAddCourse}>Add Course</button>
              <button className='cancelBtn' onClick={handleCloseAddCourseModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tutorials;
