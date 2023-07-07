import React from "react";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="my-5">
      <section id="Contact" className="bg-gray-200 py-8">
        <div className="container mx-auto px-4 flex flex-col text-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p>This is the Contact section.</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
