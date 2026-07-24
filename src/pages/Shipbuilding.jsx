import React, { useState } from 'react';
import FirstSection from '../common/Shipbuilding/FirstSection';
import SecondSection from '../common/Shipbuilding/SecondSection';

const Shipbuilding = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <FirstSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SecondSection searchQuery={searchQuery} />
    </div>
  );
};

export default Shipbuilding;