import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Foot.css";

const Foot = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer>
        <div className="copyright">
          <div className="credits">
            &copy; <span id="year">{year}</span> Dansol High School. All rights
            reserved.
          </div>
        </div>
        <div className="socials">
          <ul>
            <li>
              <Link to={"https://www.instagram.com/dansolschools/"} target="_blank" rel="noopener noreferrer">
                <FaInstagram size={35} />
              </Link>
            </li>
            <li>
              <Link to={"https://web.facebook.com/dansolschools/"} target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare size={35}/>
              </Link>
            </li>
            <li>
              <Link to={"https://www.youtube.com/@dansolschools1989"} target="_blank" rel="noopener noreferrer">
                <FaYoutube size={35}/>
              </Link>
            </li>
            <li>
              <Link to={"https://dansolschools.com"} target="_blank" rel="noopener noreferrer">
                <TbWorldWww size={35} />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Foot;
