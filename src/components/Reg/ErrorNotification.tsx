import React from 'react';

type Props = {
  error: string;
  onDismiss: () => void;
};

export const ErrorNotification: React.FC<Props> = ({ error, onDismiss }) => {
  return (
    <div
      className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 ${
        error ? 'block' : 'hidden'
      }`}
      role="alert"
    >
      <strong className="font-bold">Error! </strong>
      <span className="block sm:inline">{error}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          className="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={onDismiss}
        >
          <title>Close</title>
          <path d="M14.348 5.652a.5.5 0 00-.707 0L10 9.293 6.36 5.652a.5.5 0 10-.707.707L9.293 10l-3.64 3.64a.5.5 0 00.707.707L10 10.707l3.64 3.64a.5.5 0 00.707-.707L10.707 10l3.64-3.64a.5.5 0 000-.707z" />
        </svg>
      </span>
    </div>
  );
};
