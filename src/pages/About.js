import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          At Shop at Home, we believe in the power of convenience and community. Our mission is to bridge the gap between your desire for online shopping and your commitment to supporting local businesses. We understand that modern life can be hectic, and while the digital world offers a plethora of options, we recognize the importance of keeping our neighborhoods vibrant and thriving.
<br/><br/>
<h3>Our Vision</h3>
Our vision is simple yet impactful - to redefine online shopping by offering you the best of both worlds. We're not just another e-commerce platform; we're your go-to local online shopping companion. We envision a world where technology and local businesses harmoniously come together, enriching lives and creating a sense of unity within our communities.
</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
