import { useEffect } from "react";

export default function SEO() {
  useEffect(() => {
    const title = "Pandilla Ashok Kumar Yadav | Full-Stack Developer Portfolio";
    const description = "MCA graduate skilled in Python, Java, JavaScript, React, and SQL. Projects in web apps, ML, and cloud basics. Based in Vijayawada, India.";
    const image = "/og-image.png";

    document.title = title;

    const ensureMeta = (attr, attrValue, props) => {
      let el = document.head.querySelector(`${attr}[${attr}='${attrValue}']`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, attrValue); document.head.appendChild(el); }
      Object.entries(props).forEach(([k, v]) => el.setAttribute(k, v));
    };

    ensureMeta("name", "description", { content: description });
    ensureMeta("property", "og:title", { content: title });
    ensureMeta("property", "og:description", { content: description });
    ensureMeta("property", "og:image", { content: image });
    ensureMeta("name", "twitter:card", { content: "summary_large_image" });
  }, []);
  return null;
}
