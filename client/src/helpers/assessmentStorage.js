const getAssessmentFromStorage = () => {
  const assessment = JSON.parse(localStorage.getItem('assessment'));
  if (assessment) {
    return assessment;
  }
  return null;
};

const clearAssessmentFromStorage = () => {
  localStorage.removeItem('assessment');
};

export { getAssessmentFromStorage, clearAssessmentFromStorage };
