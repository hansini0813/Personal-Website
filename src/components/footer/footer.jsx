import React from "react";
import SocialLinks from "./socialLinks"; // Import SocialLinks component
import "./footer.css"; // Import SCSS file for styling

function ReactFooter({ links }) {
    const styleTags = {
        icon: "icon",
        iconProperties: "icon-properties",
        linkContainer: "link-container",
        linkText: "link-text",
        contactContainer: "contact-container"
      };
  return (
    <footer id="ReactFooter" className="footer">
      {/* Footer content */}
      <div className="content">
        {/* Social links and any additional footer details go here */}
        <SocialLinks links={links} />
      </div>
    </footer>
  );
}

export default ReactFooter;
