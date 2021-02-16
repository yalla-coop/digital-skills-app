import { createContext, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { dropdownData } from '../constants';

function useSearch() {
  const query = new URLSearchParams(useLocation().search);
  const [search, setSearch] = useState(() => ({
    task: query.get('task') || '',
    tool: query.get('tool') || dropdownData.A_DIGITAL_TOOL,
  }));
  return [search, setSearch];
}

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
  const [search, setSearch] = useSearch();

  const value = {
    // expanded recommended skills
    exploreMore,
    setExploreMore,
    loadedSkills,
    setLoadedSkills,
    search,
    setSearch,
  };

  return <AppStoreContext.Provider value={value} {...props} />;
};

const useAppStore = () => {
  const value = useContext(AppStoreContext);
  return value;
};

export { AppStoreProvider, useAppStore };
export default AppStoreContext;
