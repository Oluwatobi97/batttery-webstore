import React from 'react';

const colors = {
  primary: '#22C55E',
  secondary: '#0D1B2A',
  error: '#EF4444',
  border: '#D1D5DB',
  hint: '#9CA3AF',
};

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  circle?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = '', width, height, circle }) => {
  return (
    <div
      className={`animate-pulse rounded-md bg-gray-200 ${className}`}
      style={{
        width: width,
        height: height,
        borderRadius: circle ? '9999px' : undefined,
      }}
    />
  );
};

export default Skeleton;
