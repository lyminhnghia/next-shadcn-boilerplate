import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import '@/styles/globals.css';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean'
    },
    checked: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Basic checkbox
export const Default: Story = {
  render: () => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms' />
      <Label htmlFor='terms'>Accept terms and conditions</Label>
    </div>
  )
};

// Checkbox with description
export const WithDescription: Story = {
  render: () => (
    <div className='flex items-start space-x-2'>
      <Checkbox id='marketing' />
      <div className='grid gap-1.5 leading-none'>
        <Label
          htmlFor='marketing'
          className='text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          Marketing emails
        </Label>
        <p className='text-muted-foreground text-sm'>
          Receive emails about new products, features, and more.
        </p>
      </div>
    </div>
  )
};

// Disabled checkbox
export const Disabled: Story = {
  render: () => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='disabled' disabled />
      <Label
        htmlFor='disabled'
        className='text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        Disabled checkbox
      </Label>
    </div>
  )
};

// Checkbox with error state
export const WithError: Story = {
  render: () => (
    <div className='flex flex-col gap-1.5'>
      <div className='flex items-start space-x-2'>
        <Checkbox id='terms-error' />
        <div className='grid gap-1.5 leading-none'>
          <Label
            htmlFor='terms-error'
            className='text-destructive text-sm leading-none font-medium'
          >
            Accept terms and conditions
          </Label>
        </div>
      </div>
      <p className='text-destructive text-sm'>
        You must accept the terms and conditions to continue.
      </p>
    </div>
  )
};

// Checkbox group
export const CheckboxGroup: Story = {
  render: () => (
    <div className='grid gap-4'>
      <div className='flex items-start space-x-2'>
        <Checkbox id='notifications' />
        <div className='grid gap-1.5 leading-none'>
          <Label
            htmlFor='notifications'
            className='text-sm leading-none font-medium'
          >
            Push notifications
          </Label>
          <p className='text-muted-foreground text-sm'>
            Receive push notifications on your device.
          </p>
        </div>
      </div>
      <div className='flex items-start space-x-2'>
        <Checkbox id='marketing-group' />
        <div className='grid gap-1.5 leading-none'>
          <Label
            htmlFor='marketing-group'
            className='text-sm leading-none font-medium'
          >
            Marketing emails
          </Label>
          <p className='text-muted-foreground text-sm'>
            Receive emails about new products, features, and more.
          </p>
        </div>
      </div>
      <div className='flex items-start space-x-2'>
        <Checkbox id='updates' />
        <div className='grid gap-1.5 leading-none'>
          <Label htmlFor='updates' className='text-sm leading-none font-medium'>
            Security updates
          </Label>
          <p className='text-muted-foreground text-sm'>
            Receive emails about your account security.
          </p>
        </div>
      </div>
    </div>
  )
};

// Indeterminate checkbox
export const Indeterminate: Story = {
  render: () => {
    const [checked, setChecked] = React.useState<boolean | 'indeterminate'>(
      'indeterminate'
    );

    return (
      <div className='flex items-center space-x-2'>
        <Checkbox
          id='indeterminate'
          checked={checked}
          onCheckedChange={(value) => setChecked(value)}
        />
        <Label
          htmlFor='indeterminate'
          className='text-sm leading-none font-medium'
        >
          Indeterminate checkbox
        </Label>
      </div>
    );
  }
};
