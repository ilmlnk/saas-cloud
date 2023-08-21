const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-gradient-to-tr from-[#242424] to-[#134e86] items-center justify-center h-screen ">
      {children}
    </div>
  );
};

export default AuthLayout;
