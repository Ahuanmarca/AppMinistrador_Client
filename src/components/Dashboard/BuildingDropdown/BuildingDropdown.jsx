import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import {empalme, transits, maritim} from './data';
import './../BuildingDropdown/builiding.styles.css';

function BuildingDropdown() {
  const defaultValue = empalme[0].value;
  return(
  <Select.Root>
    <Select.Trigger className="SelectTrigger">
      <Select.Value placeholder={defaultValue}/>
      <Select.Icon className="SelectIcon">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="SelectContent">
        <Select.ScrollUpButton className="SelectScrollButton">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="SelectViewport">
          <SelectGroup label="Marítim" options={maritim} />
          <Select.Separator className="SelectSeparator" />
          <SelectGroup label="Tránsits" options={transits} />
          <Select.Separator className="SelectSeparator" />
          <SelectGroup label="Empalme" options={empalme} />
        </Select.Viewport>
        <Select.ScrollDownButton className="SelectScrollButton">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);}


// Render Group
const SelectGroup = ({ label, options }) => (
  <Select.Group>
    <Select.Label className="SelectLabel">{label}</Select.Label>
    {options.map((option, index) => (
      <SelectItem key={index} value={option.value} disabled={option.disabled}>
        {option.value}
      </SelectItem>
    ))}
  </Select.Group>
);

// Render Element
const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default BuildingDropdown;
