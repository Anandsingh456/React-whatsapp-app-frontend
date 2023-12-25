import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import HeaderOne from './Components/HeaderOne';
import StatusOne from './Components/StatusOne';
import ChartSection from './Components/ChartSection';
import LastFoot from './Components/LastFoot';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderOne />
        <StatusOne />
        <ChartSection />
        <LastFoot />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
