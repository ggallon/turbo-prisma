import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type FC,
  type ReactNode,
} from "react";
import cn from "clsx";
import { cva, type VariantProps } from "class-variance-authority";
import { LoadingDots } from "./loading-dots";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center rounded-md font-medium transition-colors",
    "disabled:opacity-50 disabled:pointer-events-none",
    "focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2",
    "dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
    "data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
  ],
  {
    variants: {
      variant: {
        default: [
          "text-white bg-black hover:bg-slate-700",
          "dark:bg-mono-light dark:text-slate-900 dark:hover:bg-black dark:hover:text-mono-light",
        ],
        negative: [
          "text-white bg-red-500 hover:bg-red-600",
          "dark:hover:bg-red-600",
        ],
        outline: [
          "bg-transparent border border-slate-200 hover:bg-slate-200",
          "dark:border-slate-700 dark:text-slate-100 dark:hover:text-slate-700",
        ],
        subtle: [
          "bg-slate-200 text-slate-900 hover:bg-slate-400",
          "dark:bg-slate-700 dark:text-slate-100 dark:hover:text-slate-700",
        ],
        ghost: [
          "bg-transparent hover:bg-slate-200",
          "dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100",
          "data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        ],
        link: [
          "bg-transparent underline-offset-4 hover:underline text-slate-900",
          "dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
        ],
      },
      size: {
        default: "h-10 px-3 text-sm",
        sm: "h-8 px-3 text-sm",
        lg: "h-11 px-8 text",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * All the component types allowed by the Button component.
 */
export type ButtonComponentType = "button" | "a";

/**
 * Base props of the Button component.
 */
export interface ButtonProps<C extends ButtonComponentType = "button">
  extends VariantProps<typeof buttonVariants> {
  Component?: C;
  children: string | ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  loading?: boolean;
  type?: "submit" | "reset" | "button";
}

/**
 * The HTML props allowed by the Button component. These
 * props depend on the used component type (C).
 */
export type ButtonHTMLType<C extends ButtonComponentType = "button"> =
  C extends "a"
    ? AnchorHTMLAttributes<HTMLAnchorElement>
    : ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonFC<C extends ButtonComponentType = "button"> = FC<
  ButtonHTMLType<C> & ButtonProps<C>
>;

type ButtonType = <C extends ButtonComponentType = "button">(
  ...args: Parameters<ButtonFC<C>>
) => ReturnType<ButtonFC<C>>;

const Button: ButtonFC = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      Component = "button",
      className,
      loading = false,
      size,
      variant,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        data-variant={variant}
        className={cn(buttonVariants({ variant, size, className }), {
          "cursor-not-allowed": loading,
        })}
        ref={ref}
        {...props}
      >
        <>
          {loading && (
            <i className="my-0 mr-2 ml-0 flex">
              <LoadingDots />
            </i>
          )}
          {children}
        </>
      </Component>
    );
  }
);

Button.displayName = "Button";

export default Button as ButtonType;
