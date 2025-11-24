import { CircleAlert } from "lucide-react";

function AuthError(props) {
  return (
    <div className="font-medium text-sm text-red-500 mt-4 flex items-center bg-red-50 rounded-lg p-2 px-3 border border-red-500">
      <CircleAlert size={16} />
      &nbsp;<span>{props.authError}</span>
    </div>
  );
}

export default AuthError;
