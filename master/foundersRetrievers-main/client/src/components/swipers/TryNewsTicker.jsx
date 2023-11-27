import React, { useState, useEffect } from 'react';

const tickerContainerStyle = {
  overflow: 'hidden',
};

const tickerListStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
};

const tickerItemStyle = {
  marginRight: '20px', // Adjust spacing between news items
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
};

const activeItemStyle = {
  fontWeight: 'bold', // Style for active news item
  color: '#ff0000', // Change the color as needed
};

const NewsTicker = ({ newsItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const newsItems = ['News 1', 'News 2', 'News 3'];

    if (!Array.isArray(newsItems) || newsItems.length === 0) {
      // Handle the case where newsItems is not an array or is empty
      return;
    }

    const tickerInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 3000); // Change the interval as needed (e.g., every 3 seconds)

    return () => {
      clearInterval(tickerInterval);
    };
  }, [newsItems]); // Remove ".length" from the dependency array

  return (
    <div style={tickerContainerStyle}>
      <ul style={tickerListStyle}>
        {newsItems.map((item, index) => (
          <li key={index} style={currentIndex === index ? { ...tickerItemStyle, ...activeItemStyle } : tickerItemStyle}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsTicker;
