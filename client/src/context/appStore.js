import { createContext, useState, useContext } from 'react';

const AppStoreContext = createContext({
  // expanded recommended skills
  setExploreMore: () => {},
  setLoadedSkills: () => {},
  exploreMore: false,
  loadedSkills: 3,
});

const AppStoreProvider = (props) => {
  const [exploreMore, setExploreMore] = useState(false);
  const [loadedSkills, setLoadedSkills] = useState(3);

  const value = {
    // expanded recommended skills
    exploreMore,
    setExploreMore,
    loadedSkills,
    setLoadedSkills,
  };

  return <AppStoreContext.Provider value={value} {...props} />;
};

const useAppStore = () => {
  const value = useContext(AppStoreContext);
  return value;
};

export { AppStoreProvider, useAppStore };
export default AppStoreContext;
