const Alert = ({ children, className = "" }) => (
    <div className={`rounded-lg border p-4 ${className}`}>
      {children}
    </div>
  );
  
  const AlertDescription = ({ children }) => (
    <div className="text-sm">{children}</div>
  );
  
  export { Alert, AlertDescription };