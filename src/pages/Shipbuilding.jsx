import React, { useState } from 'react';
import FirstSection from '../common/Shipbuilding/FirstSection';
import SecondSection from '../common/Shipbuilding/SecondSection';

const Shipbuilding = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedState('all');
    setSelectedType('all');
  };

  return (
    <div>
      <FirstSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        onResetFilters={handleResetFilters}
      />
      <SecondSection
        searchQuery={searchQuery}
        selectedState={selectedState}
        selectedType={selectedType}
      />
    </div>
  );
};

export default Shipbuilding;