import React, {
  ComponentPropsWithoutRef,
  ElementType,
  MouseEventHandler,
  ReactNode,
} from 'react';
import SpinIcon from '../SpinIcon/SpinIcon';

export type ButtonProps<T extends ElementType> = {
  /**
   * Component to be rendered as. Default: "button"
   */
  as?: T;
  /**
   * Appends class names to the existing class name string
   */
  className?: string;
  children: ReactNode;
  loading?: boolean;
  onClick?: MouseEventHandler;
  bgClass?: string;
  focusRingClass?: string;
  paddingClass?: string;
  textClass?: string;
};

export const Button = <T extends ElementType = 'button'>({
  as,
  className = '',
  children,
  onClick,
  loading,
  bgClass = 'bg-br-primary',
  focusRingClass = 'focus:ring-br-primary',
  paddingClass = 'py-2 px-4',
  textClass = 'text-white font-medium',
  ...otherProps
}: ButtonProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Component = as || 'button';
  return (
    <Component
      onClick={(event) => {
        if (!loading) {
          onClick?.(event);
        }
      }}
      className={`inline-flex  flex-shrink-0 items-center ${bgClass} ${textClass} hover:opacity-80 ${paddingClass} rounded-lg shadow-sm ${focusRingClass} focus:outline-none focus:ring-2  focus:ring-offset-2 disabled:opacity-30 disabled:cursor-not-allowed ${
        loading ? 'opacity-80  animate-pulse' : ''
      } ${className}`}
      {...otherProps}
    >
      {children}
      {loading && <SpinIcon className="h-4 w-4 ml-2" />}
    </Component>
  );
};
