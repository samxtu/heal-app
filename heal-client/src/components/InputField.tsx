import React from "react";
import { useField } from "formik";
// import { DropdownItemProps, Form, Input, Label } from "semantic-ui-react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  ResponsiveValue,
  Select,
  Checkbox,
  RadioGroup,
  HStack,
  Radio,
} from "@chakra-ui/react";

type IAppProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  mt?: string;
  touched: boolean | undefined;
  as?: React.ElementType;
  size?: ResponsiveValue<"md" | (string & {}) | "sm" | "lg" | "xs"> | undefined;
  fluid?: boolean;
  slider?: boolean;
  checkbox?: boolean;
  radio?: boolean;
  select?: boolean;
  prefix?: string;
  options?: any[];
  iconName?: string;
  buttonName?: string;
  width?: string;
  error?: string;
};

export const InputField: React.FC<IAppProps> = ({
  mt = "4px",
  as = "input",
  size = "md",
  touched,
  label,
  width,
  radio,
  select,
  checkbox,
  prefix,
  options,
  iconName,
  buttonName,
  ...props
}) => {
  const [field, { error }] = useField(props);
  const TextareaOrInput = as === "textarea" ? "Textarea" : "Input";
  if (!radio && !select && !checkbox)
    return (
      <FormControl isInvalid={error && touched ? error.length > 0 : undefined}>
        <FormLabel>{label}</FormLabel>
        {TextareaOrInput === "Input" ? (
          <Input
            size={size}
            variant="flushed"
            id={field.name}
            {...props}
            {...field}
          />
        ) : (
          <Textarea
            size={size}
            variant="flushed"
            id={field.name}
            {...(props as any)}
            {...field}
          />
        )}
        {error && touched ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      </FormControl>
    );
  else {
    if (select) {
      return (
        <FormControl
          error={!!error && touched}
          control="select"
          {...field}
          {...(props as any)}
          id={field.name}
          label={label}
        >
          <Select size={size} placeholder={props.placeholder}>
            {options?.map((opt) => (
              <option key={opt.key} value={`${opt.value as number}`}>
                {opt.text}
              </option>
            ))}
          </Select>
        </FormControl>
      );
    }
    if (checkbox) {
      return (
        <FormControl>
          <Checkbox
            size={size}
            {...field}
            {...(props as any)}
            toggle
            id={field.name}
            label={label}
          />
        </FormControl>
      );
    }
    if (radio) {
      return (
        <FormControl as="fieldset">
          <FormLabel as="legend">{label}</FormLabel>
          <RadioGroup size={size} defaultValue={`${props.defaultValue}`}>
            <HStack spacing="24px">
              {options?.map((opt, index) => (
                <Radio key={index} value={`${opt}`}>
                  {opt}
                </Radio>
              ))}
            </HStack>
          </RadioGroup>
        </FormControl>
      );
    } else
      return (
        <Input
          size={size}
          variant="flushed"
          id={field.name}
          {...props}
          {...field}
        />
      );
  }
};
