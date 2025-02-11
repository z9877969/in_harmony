'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

const PageComponent = () => {
  const [firstSectionData, setFirstSectionData] = useState(null);
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    axios
      .get(
        'http://localhost:3000/api/all-pages/en/active/67ab116645adb91e64c7d8f1'
      )
      .then((response) => {
        const data = response.data.data;

        const updatedSection = [
          {
            ...data.sections_list[0],
            section_content: {
              ...data.dynamicSection,
            },
          },
        ];

        const updatedSections = [{ ...data.sections_list , ...updatedSection }];
        setPageData(data);
        setFirstSectionData(updatedSections);
      })
      .catch((error) => {
        console.error('Error fetching page data:', error);
      });
  }, []);

  if (!firstSectionData) {
    return <div>Loading...</div>;
  }
  console.log(firstSectionData);
  console.log(pageData);

  return (
    <div>
      {firstSectionData.map((section, index) => (
        <div key={index}>
          <h2>{section.section_content && section.section_content.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default PageComponent;
