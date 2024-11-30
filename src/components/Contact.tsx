import { useState } from "react";
import emailjs from "emailjs-com";
import contactSvg from "../assets/images/contact.svg";
import Modal from "./Modal";

const Contact = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const templateParams = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    phone: formData.phone,
    email: formData.email,
    message: formData.message,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await emailjs.send("service_bj8hrq4", "template_f9hhp9b", templateParams, "VakBFA1QLBGZOMeSo");
      setIsModalVisible(true);
      setTimeout(() => {
        setIsModalVisible(false);
      }, 3000);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div id="contacts" className="bg-gradient-to-b from-[#1c1c1c] to-black via-[#1c1c1c] pt-[120px]">
      {!isModalVisible && <Modal />}
      <h1 className="text-5xl font-bold text-center pb-20">Contact</h1>
      <section className="flex justify-around">
        <img className="h-[500px] w-[48%] max-md:hidden" src={contactSvg} />
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-1/2 max-w-3xl mx-auto px-4 max-md:w-full">
          <section className="flex justify-between w-full">
            <div className="relative w-[48%]">
              <input className="border border-[#6b21a8] p-5 rounded-lg w-full bg-transparent" type="text" name="firstName" placeholder=" " value={formData.firstName} onChange={handleChange} required />
              <label className="absolute left-4 top-4 transition-all text-gray-400 pointer-events-none">First Name</label>
            </div>
            <div className="relative w-[48%]">
              <input className="border border-[#6b21a8] p-5 rounded-lg w-full bg-transparent" type="text" name="lastName" placeholder=" " value={formData.lastName} onChange={handleChange} required />
              <label className="absolute left-4 top-4 transition-all text-gray-400 pointer-events-none">Last Name</label>
            </div>
          </section>
          <section className="flex justify-between w-full mt-4">
            <div className="relative w-[48%]">
              <input className="border border-[#6b21a8] p-5 rounded-lg w-full bg-[#1c1c1c]" type="tel" name="phone" placeholder=" " value={formData.phone} onChange={handleChange} required />
              <label className="absolute left-4 top-4 transition-all text-gray-400 pointer-events-none">Phone Number</label>
            </div>
            <div className="relative w-[48%]">
              <input className="border border-[#6b21a8] p-5 rounded-lg w-full bg-transparent" type="email" name="email" placeholder=" " value={formData.email} onChange={handleChange} required />
              <label className="absolute left-4 top-4 transition-all text-gray-400 pointer-events-none">Email</label>
            </div>
          </section>
          <section className="w-full mt-4 relative">
            <textarea style={{ height: "150px" }} className="border border-[#6b21a8] p-5 rounded-lg w-full bg-transparent" name="message" placeholder=" " value={formData.message} onChange={handleChange} required />
            <label className="absolute left-4 top-4 transition-all text-gray-400 pointer-events-none">Your Message</label>
          </section>
          <section className="w-full flex justify-start">
            <button type="submit" className="mt-6 p-5 bg-[#4d177a] text-white rounded-lg font-bold">
              Send Message
            </button>
          </section>
        </form>
      </section>
    </div>
  );
};

export default Contact;
