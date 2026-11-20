import React from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import HeroOrbitSection from './HeroOrbitSection';
import HomeStatsSection from './HomeStatsSection';
import AssociationPortals from './AssociationPortals';
import './Home.css';

const Home = () => {
  return (
    <PageContainer className="home-page-container">
      {/* Exact UI Design & 3D Round Animation Hero Section */}
      <HeroOrbitSection />

      {/* Floating Statistics Section (Below the Home Page Hero Section) */}
      <HomeStatsSection />

      {/* Exact UI Design Association Portals & Information Section */}
      <AssociationPortals />
    </PageContainer>
  );
};

export default Home;
