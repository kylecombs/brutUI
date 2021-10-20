import React, { FC } from "react";
import classNames from "classnames";
import { Typography } from ".";

export interface TextInputProps {
  type: "text" | "email";
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  leadingText?: string;
  placeholder: string;
  error?: string;
  helperText?: string;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
  disabled?: boolean;
}

// TODO states: focused & disabled
export const TextInput: FC<TextInputProps> = ({
  type,
  value,
  handleChange,
  label,
  leadingText,
  placeholder,
  error,
  helperText,
  LeadingIcon,
  TrailingIcon,
  disabled,
}) => {
  return (
    <>
      {label ? (
        <Typography
          variant="sm"
          customWeight="medium"
          customColor="text-gray-700 dark:text-white"
          className="mb-1.5"
        >
          {label}
        </Typography>
      ) : null}
      <div
        className={classNames("w-80 relative", {
          "flex items-center": leadingText,
        })}
      >
        <div className="h-11 w-full absolute flex items-center justify-between px-3.5 pointer-events-none">
          {LeadingIcon ? (
            <LeadingIcon.type className="text-gray-500" />
          ) : (
            <div />
          )}
          {TrailingIcon ? (
            <TrailingIcon.type
              className={classNames({
                "text-gray-400": !error,
                "text-error-500": error,
              })}
            />
          ) : null}
        </div>

        {leadingText ? (
          <div
            className={classNames(
              "flex items-center h-11 text-lg text-gray-500 pl-3.5 pr-3 border border-r-0 rounded-l-lg border-gray-300 dark:border-gray-500",
              {
                "bg-gray-50 dark:bg-gray-700": disabled,
                "dark:bg-gray-800": !disabled,
              },
            )}
          >
            {leadingText}
          </div>
        ) : null}

        <input
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={classNames(
            "w-80 text-gray-900 dark:text-white text-md border h-11 focus:outline-none focus:shadow",
            {
              "pl-9": LeadingIcon,
              "pr-9": TrailingIcon,
              "rounded-l-0 rounded-r-lg": leadingText,
              "rounded-lg": !leadingText,
              "border-gray-300 dark:border-gray-500": !error,
              "border-error-300": error,
              "bg-white dark:bg-gray-800": !disabled,
              "bg-gray-50 dark:bg-gray-700": disabled,
            },
          )}
          disabled={disabled}
        />
      </div>

      {error ? (
        <div className="mt-1.5 text-error-500 text-sm">{error}</div>
      ) : null}

      {helperText ? (
        <div className="mt-1.5 text-gray-500 text-sm">{helperText}</div>
      ) : null}
    </>
  );
};