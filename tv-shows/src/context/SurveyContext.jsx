import { createContext, useContext, useState } from "react";

const SurveyContext = createContext();

function SurveyProvider({ children }) {
  const [results, setResults] = useState([]);

  return (
    <SurveyContext.Provider value={{ results, setResults }}>
      {children}
    </SurveyContext.Provider>
  );
}

function useSurvey() {
  return useContext(SurveyContext);
}

export {SurveyProvider, useSurvey}