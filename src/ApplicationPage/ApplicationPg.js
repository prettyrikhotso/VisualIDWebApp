import React, { useState, useEffect } from "react";
import SignaturePad from "./SignaturePad";  // Import the signature pad module
import styles from "./ApplicationPg.module.css";  // Import CSS module

const ApplicationPg = () => {
  // Default form data
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    idNumber: "",
    phone: "",
    email: "",
    address: "",
    applicationType: "",
    countryOfBirth: "",
    province: "",
    naturalizedCitizen: false,
    guardian1: "",
    guardian2: "",
    fatherName: "",
    fatherID: "",
    motherName: "",
    motherID: "",
    maritalStatus: "",
    spouseName: "",
    spouseID: "",
    emergencyContact: "",
    emergencyPhone: "",
    disabilities: "",
    additionalInfo: "",
    citizen: false,
    photo: null,
    proofOfResidence: null,
    birthCertificate: null,
    signature: null,  // Store signature data
  });

  const [photoPreview, setPhotoPreview] = useState(null);

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
      if (savedData.photo) {
        setPhotoPreview(URL.createObjectURL(savedData.photo));
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      const file = files[0];
      setFormData({ ...formData, [name]: file });
      if (name === "photo") {
        setPhotoPreview(file ? URL.createObjectURL(file) : null);
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSave = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Your data has been saved.");
  };

  const provinces = [
    "Eastern Cape",
    "Free State",
    "Gauteng",
    "KwaZulu-Natal",
    "Limpopo",
    "Mpumalanga",
    "Northern Cape",
    "North West",
    "Western Cape"
  ];

  const handleContinue = () => {
    alert("You can continue the form later.");
    setFormData({
      fullName: "",
      dob: "",
      gender: "",
      idNumber: "",
      phone: "",
      email: "",
      address: "",
      applicationType: "",
      countryOfBirth: "",
      province: "",
      naturalizedCitizen: false,
      guardian1: "",
      guardian2: "",
      fatherName: "",
      fatherID: "",
      motherName: "",
      motherID: "",
      maritalStatus: "",
      emergencyContact: "",
      emergencyPhone: "",
      disabilities: "",
      citizen: false,
      photo: null,
      proofOfResidence: null,
      birthCertificate: null,
      signature: null,  // Clear signature
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.citizen) {
      alert("Please confirm if you are a citizen before proceeding.");
      return;
    }
    console.log("Form Submitted", formData);
    alert("Application Submitted");
    // Reset form after submission
    setFormData({
      fullName: "",
      dob: "",
      gender: "",
      idNumber: "",
      phone: "",
      email: "",
      address: "",
      applicationType: "",
      countryOfBirth: "",
      province: "",
      naturalizedCitizen: false,
      guardian1: "",
      guardian2: "",
      fatherName: "",
      fatherID: "",
      motherName: "",
      motherID: "",
      maritalStatus: "",
      emergencyContact: "",
      emergencyPhone: "",
      disabilities: "",
      citizen: false,
      photo: null,
      proofOfResidence: null,
      birthCertificate: null,
      signature: null,  // Reset signature
    });
  };

  const saveSignature = (signatureData) => {
    setFormData({ ...formData, signature: signatureData });
  };

  const clearSignature = () => {
    setFormData({ ...formData, signature: null });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h2 className={styles.title}>Home Affairs Application Form</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Full Name */}
            <div>
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                required=""
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                 required=""
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            {/* Gender */}
            <div>
              <label>Gender</label>
              <select
                name="gender"
                 required=""
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* ID Number */}
            <div>
              <label>ID Number</label>
              <input
                type="text"
                name="idNumber"
                 required=""
                value={formData.idNumber}
                onChange={handleChange}
                required
              />
            </div>

         

            {/* Phone */}
            <div>
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                 required=""
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Address */}
            <div>
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            {/* Application Type */}
            <div>
              <label>Application Type</label>
              <input
                type="text"
                name="applicationType"
                value={formData.applicationType}
                onChange={handleChange}
              />
            </div>

            {/* Country of Birth */}
            <div>
              <label>Country of Birth</label>
              <input
                type="text"
                name="countryOfBirth"
                value={formData.countryOfBirth}
                onChange={handleChange}
              />
            </div>

            {/* Province */}
            <div>
              <label>Province</label>
              <select
                name="province"
                value={formData.province}
                onChange={handleChange}
                required
              >
                <option value="">Select Province</option>
                {provinces.map((province, index) => (
                  <option key={index} value={province}>{province}</option>
                ))}
              </select>
            </div>

            {/* Guardian Information */}
            <div>
              <label>Guardian 1</label>
              <input
                type="text"
                name="guardian1"
                value={formData.guardian1}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Guardian 2</label>
              <input
                type="text"
                name="guardian2"
                value={formData.guardian2}
                onChange={handleChange}
              />
            </div>

            {/* Father and Mother Information */}
            <div>
              <label>Father's Name</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Father's ID</label>
              <input
                type="text"
                name="fatherID"
                value={formData.fatherID}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Mother's Name</label>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Mother's ID</label>
              <input
                type="text"
                name="motherID"
                value={formData.motherID}
                onChange={handleChange}
              />
            </div>

            {/* Marital Status */}
            <div>
              <label>Marital Status</label>
              <input
                type="text"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
              />
            </div>

      
            {/* Emergency Contact */}
            <div>
              <label>Emergency Contact</label>
              <input
                type="text"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Emergency Phone</label>
              <input
                type="tel"
                name="emergencyPhone"
                value={formData.emergencyPhone}
                onChange={handleChange}
              />
            </div>

            {/* Disabilities */}
            <div>
              <label>Disabilities</label>
              <input
                type="text"
                name="disabilities"
                value={formData.disabilities}
                onChange={handleChange}
              />
            </div>

         
            {/* Citizen Confirmation */}
            <div>
              <label>
                Are you a citizen?
                <input
                  type="checkbox"
                  name="citizen"
                  checked={formData.citizen}
                  onChange={handleChange}
                />
              </label>
            </div>

            {/* Photo Upload */}
            <div>
              <label>Upload Photo</label>
              <input
                type="file"
                name="photo"
                onChange={handleChange}
              />
              {photoPreview && <img src={photoPreview} alt="Photo Preview" className={styles.photoPreview} />}
            </div>

            {/* Proof of Residence */}
            <div>
              <label>Upload Proof of Residence</label>
              <input
                type="file"
                name="proofOfResidence"
                onChange={handleChange}
              />
            </div>

            {/* Birth Certificate */}
            <div>
              <label>Upload Birth Certificate</label>
              <input
                type="file"
                name="birthCertificate"
                onChange={handleChange}
              />
            </div>

            {/* Signature */}
            <SignaturePad
              onSaveSignature={saveSignature}
              onClearSignature={clearSignature}
            />

            {/* Form Actions */}
            <div className={styles.formActions}>
              <button type="button" className={styles.saveButton} onClick={handleSave}>
                Save
              </button>
              <button type="button" className={styles.continueButton} onClick={handleContinue}>
                Continue
              </button>
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPg;
