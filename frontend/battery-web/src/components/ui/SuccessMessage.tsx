import React from 'react';

const colors = {
  primary: '#22C55E',
  secondary: '#0D1B2A',
  error: '#EF4444',
  border: '#D1D5DB',
  hint: '#9CA3AF',
};

interface SuccessMessageProps {
  message: string;
  className?: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message, className = '' }) => {
  return (
    <div
      className={`flex items-center gap-3 rounded-md border p-4 ${className}`}
      style={{ borderColor: colors.primary, backgroundColor: '#F0FDF4' }}
    >
      <div className="flex-shrink-0" style={{ color: colors.primary }}>
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <p className="text-sm font-medium" style={{ color: colors.secondary }}>
        {message}
      </p>
    </div>
  );
};

export default SuccessMessage;
