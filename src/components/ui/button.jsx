'use client';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-semibold transition rounded';
  const sizes = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-sm px-5 py-2.5',
  };
  const variants = {
    primary: 'bg-teal-900 text-white hover:bg-teal-800',
    outline: 'border-2 border-teal-900 text-teal-900 hover:bg-gray-50',
    success:
      ' bg-secondary text-teal-900 hover:bg-lime-200',
    ghost: 'bg-transparent text-teal-900 hover:bg-gray-100',
  };
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
