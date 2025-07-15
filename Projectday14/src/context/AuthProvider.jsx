import useCredential from "./../hooks/useCredential";

const AuthProvider = ({ children }) => {
  const allContexts = useCredential();

  return (
    <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
