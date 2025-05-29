import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import '@/styles/globals.css';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search']
    },
    disabled: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

// Basic input
export const Default: Story = {
  args: {
    placeholder: 'Enter text here...'
  }
};

// Input with label
export const WithLabel: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='email'>Email</Label>
      <Input type='email' id='email' placeholder='Enter your email' />
    </div>
  )
};

// Input with error state
export const WithError: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='email' className='text-destructive'>
        Email
      </Label>
      <Input
        type='email'
        id='email'
        placeholder='Enter your email'
        className='border-destructive'
      />
      <p className='text-destructive text-sm'>
        Please enter a valid email address.
      </p>
    </div>
  )
};

// Disabled input
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true
  }
};

// Input with icon
export const WithIcon: Story = {
  render: () => (
    <div className='relative'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4'
      >
        <circle cx='11' cy='11' r='8' />
        <path d='m21 21-4.3-4.3' />
      </svg>
      <Input type='search' placeholder='Search...' className='pl-8' />
    </div>
  )
};

// Input with helper text
export const WithHelperText: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='username'>Username</Label>
      <Input type='text' id='username' placeholder='Enter your username' />
      <p className='text-muted-foreground text-sm'>
        This is your public display name. It can be your real name or a
        pseudonym.
      </p>
    </div>
  )
};

// Input with different sizes
export const Sizes: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      <Input type='text' placeholder='Small input' className='h-8' />
      <Input type='text' placeholder='Default input' />
      <Input type='text' placeholder='Large input' className='h-12' />
    </div>
  )
};
