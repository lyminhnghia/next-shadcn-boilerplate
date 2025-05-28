import type { Meta, StoryObj } from '@storybook/react';
import '@/styles/globals.css';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
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
type Story = StoryObj<typeof Switch>;

// Basic switch
export const Default: Story = {
  render: () => (
    <div className='flex items-center space-x-2'>
      <Switch id='airplane-mode' />
      <Label htmlFor='airplane-mode'>Airplane Mode</Label>
    </div>
  )
};

// Switch with description
export const WithDescription: Story = {
  render: () => (
    <div className='flex items-start space-x-2'>
      <Switch id='marketing' />
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

// Disabled switch
export const Disabled: Story = {
  render: () => (
    <div className='flex items-center space-x-2'>
      <Switch id='disabled' disabled />
      <Label
        htmlFor='disabled'
        className='text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        Disabled switch
      </Label>
    </div>
  )
};

// Switch with error state
export const WithError: Story = {
  render: () => (
    <div className='flex flex-col gap-1.5'>
      <div className='flex items-start space-x-2'>
        <Switch id='terms-error' />
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

// Switch group
export const SwitchGroup: Story = {
  render: () => (
    <div className='grid gap-4'>
      <div className='flex items-start space-x-2'>
        <Switch id='notifications' />
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
        <Switch id='marketing-group' />
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
        <Switch id='updates' />
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

// Switch with helper text
export const WithHelperText: Story = {
  render: () => (
    <div className='grid gap-1.5'>
      <Label>Notification settings</Label>
      <div className='flex items-start space-x-2'>
        <Switch id='all-notifications' />
        <div className='grid gap-1.5 leading-none'>
          <Label
            htmlFor='all-notifications'
            className='text-sm leading-none font-medium'
          >
            All notifications
          </Label>
          <p className='text-muted-foreground text-sm'>
            Receive all notifications, including marketing and security updates.
          </p>
        </div>
      </div>
      <p className='text-muted-foreground text-sm'>
        You can change your notification preferences at any time.
      </p>
    </div>
  )
};
