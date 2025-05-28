import type { Meta, StoryObj } from '@storybook/react';
import '@/styles/globals.css';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean'
    },
    placeholder: {
      control: 'text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Textarea>;

// Basic textarea
export const Default: Story = {
  args: {
    placeholder: 'Type your message here...'
  }
};

// Textarea with label
export const WithLabel: Story = {
  render: () => (
    <div className='grid w-full gap-1.5'>
      <Label htmlFor='message'>Your message</Label>
      <Textarea id='message' placeholder='Type your message here...' />
    </div>
  )
};

// Textarea with error state
export const WithError: Story = {
  render: () => (
    <div className='grid w-full gap-1.5'>
      <Label htmlFor='message' className='text-destructive'>
        Your message
      </Label>
      <Textarea
        id='message'
        placeholder='Type your message here...'
        className='border-destructive'
      />
      <p className='text-destructive text-sm'>
        Your message must be at least 10 characters long.
      </p>
    </div>
  )
};

// Disabled textarea
export const Disabled: Story = {
  args: {
    placeholder: 'This textarea is disabled',
    disabled: true
  }
};

// Textarea with helper text
export const WithHelperText: Story = {
  render: () => (
    <div className='grid w-full gap-1.5'>
      <Label htmlFor='bio'>Bio</Label>
      <Textarea id='bio' placeholder='Tell us a little bit about yourself' />
      <p className='text-muted-foreground text-sm'>
        Brief description for your profile. URLs are hyperlinked.
      </p>
    </div>
  )
};

// Textarea with different sizes
export const Sizes: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      <div className='grid w-full gap-1.5'>
        <Label htmlFor='small'>Small</Label>
        <Textarea
          id='small'
          placeholder='Small textarea'
          className='min-h-[80px]'
        />
      </div>
      <div className='grid w-full gap-1.5'>
        <Label htmlFor='default'>Default</Label>
        <Textarea
          id='default'
          placeholder='Default textarea'
          className='min-h-[120px]'
        />
      </div>
      <div className='grid w-full gap-1.5'>
        <Label htmlFor='large'>Large</Label>
        <Textarea
          id='large'
          placeholder='Large textarea'
          className='min-h-[200px]'
        />
      </div>
    </div>
  )
};

// Textarea with character count
export const WithCharacterCount: Story = {
  render: () => {
    const maxLength = 280;
    return (
      <div className='grid w-full gap-1.5'>
        <Label htmlFor='tweet'>Tweet</Label>
        <Textarea
          id='tweet'
          placeholder="What's happening?"
          maxLength={maxLength}
          className='min-h-[120px]'
        />
        <p className='text-muted-foreground text-right text-sm'>
          0/{maxLength} characters
        </p>
      </div>
    );
  }
};
