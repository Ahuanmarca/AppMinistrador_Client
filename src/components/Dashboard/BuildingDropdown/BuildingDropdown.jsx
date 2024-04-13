import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import './../BuildingDropdown/builiding.styles.css';

function BuildingDropdown({ currentBuilding, data, updateDashboardData }) {

  const { Campanar, Empalme, Libertad } = data;
  const handleValueChange = (newOption) => {
    updateDashboardData({
      buildingId: newOption.label,
      accountId: newOption.label,
    });
  };

  return (
    <Select.Root
      onValueChange={handleValueChange}
    >
      <Select.Trigger className="SelectTrigger">
        <Select.Value placeholder={currentBuilding.title}>
          <p>{currentBuilding.title}</p>
        </Select.Value>
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
            <SelectGroup label="Campanar" options={Campanar} />
            <Select.Separator className="SelectSeparator" />
            <SelectGroup label="Empalme" options={Empalme} />
            <Select.Separator className="SelectSeparator" />
            <SelectGroup label="Libertad" options={Libertad} />
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

// Render Group
const SelectGroup = ({ label, options }) => (
  <Select.Group>
    <Select.Label className="SelectLabel">{label}</Select.Label>
    {options.map((option, index) => (
      <SelectItem key={index} value={option} disabled={option.disabled}>
        {option.value}
      </SelectItem>
    ))}
  </Select.Group>
);

// Render Element
const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames('SelectItem', className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default BuildingDropdown;
