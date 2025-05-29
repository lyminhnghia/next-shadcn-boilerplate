import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import '@/styles/globals.css';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

// Basic radio group
export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue='comfortable'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='default' id='r1' />
        <Label htmlFor='r1'>Default</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='comfortable' id='r2' />
        <Label htmlFor='r2'>Comfortable</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='compact' id='r3' />
        <Label htmlFor='r3'>Compact</Label>
      </div>
    </RadioGroup>
  )
};

// Radio group with description
export const WithDescription: Story = {
  render: () => (
    <RadioGroup defaultValue='card'>
      <div className='flex items-start space-x-2'>
        <RadioGroupItem value='card' id='card' />
        <div className='grid gap-1.5 leading-none'>
          <Label
            htmlFor='card'
            className='text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Card payment
          </Label>
          <p className='text-muted-foreground text-sm'>
            Pay with your credit card.
          </p>
        </div>
      </div>
      <div className='flex items-start space-x-2'>
        <RadioGroupItem value='paypal' id='paypal' />
        <div className='grid gap-1.5 leading-none'>
          <Label
            htmlFor='paypal'
            className='text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            PayPal
          </Label>
          <p className='text-muted-foreground text-sm'>
            Pay with your PayPal account.
          </p>
        </div>
      </div>
      <div className='flex items-start space-x-2'>
        <RadioGroupItem value='apple' id='apple' />
        <div className='grid gap-1.5 leading-none'>
          <Label
            htmlFor='apple'
            className='text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Apple Pay
          </Label>
          <p className='text-muted-foreground text-sm'>
            Pay with your Apple Pay account.
          </p>
        </div>
      </div>
    </RadioGroup>
  )
};

// Disabled radio group
export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue='option-1' disabled>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-1' id='disabled-1' />
        <Label
          htmlFor='disabled-1'
          className='text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          Option 1
        </Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-2' id='disabled-2' />
        <Label
          htmlFor='disabled-2'
          className='text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          Option 2
        </Label>
      </div>
    </RadioGroup>
  )
};

// Radio group with error state
export const WithError: Story = {
  render: () => (
    <div className='grid gap-1.5'>
      <RadioGroup defaultValue='option-1'>
        <div className='flex items-start space-x-2'>
          <RadioGroupItem value='option-1' id='error-1' />
          <div className='grid gap-1.5 leading-none'>
            <Label
              htmlFor='error-1'
              className='text-destructive text-sm leading-none font-medium'
            >
              Option 1
            </Label>
          </div>
        </div>
        <div className='flex items-start space-x-2'>
          <RadioGroupItem value='option-2' id='error-2' />
          <div className='grid gap-1.5 leading-none'>
            <Label
              htmlFor='error-2'
              className='text-destructive text-sm leading-none font-medium'
            >
              Option 2
            </Label>
          </div>
        </div>
      </RadioGroup>
      <p className='text-destructive text-sm'>
        Please select an option to continue.
      </p>
    </div>
  )
};

// Radio group with helper text
export const WithHelperText: Story = {
  render: () => (
    <div className='grid gap-1.5'>
      <Label>Notification preferences</Label>
      <RadioGroup defaultValue='all'>
        <div className='flex items-start space-x-2'>
          <RadioGroupItem value='all' id='all' />
          <div className='grid gap-1.5 leading-none'>
            <Label htmlFor='all' className='text-sm leading-none font-medium'>
              All notifications
            </Label>
            <p className='text-muted-foreground text-sm'>
              Receive notifications for all activity.
            </p>
          </div>
        </div>
        <div className='flex items-start space-x-2'>
          <RadioGroupItem value='important' id='important' />
          <div className='grid gap-1.5 leading-none'>
            <Label
              htmlFor='important'
              className='text-sm leading-none font-medium'
            >
              Important only
            </Label>
            <p className='text-muted-foreground text-sm'>
              Only receive notifications for important updates.
            </p>
          </div>
        </div>
        <div className='flex items-start space-x-2'>
          <RadioGroupItem value='none' id='none' />
          <div className='grid gap-1.5 leading-none'>
            <Label htmlFor='none' className='text-sm leading-none font-medium'>
              None
            </Label>
            <p className='text-muted-foreground text-sm'>
              Don&apos;t receive any notifications.
            </p>
          </div>
        </div>
      </RadioGroup>
      <p className='text-muted-foreground text-sm'>
        You can change your notification preferences at any time.
      </p>
    </div>
  )
};
