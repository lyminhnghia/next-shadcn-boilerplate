import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '@/components/ui/button';
import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react';
import { Loader2 } from 'lucide-react';
import '@/styles/globals.css';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    asChild: {
      control: 'boolean',
      description: 'Whether to render as a child component',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Basic button
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

// All variants
export const Variants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button variant='default'>Default</Button>
      <Button variant='destructive'>Destructive</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='link'>Link</Button>
    </div>
  ),
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Button size='sm'>Small</Button>
      <Button size='default'>Default</Button>
      <Button size='lg'>Large</Button>
      <Button size='icon'>
        <IconBrandGithub className='h-4 w-4' />
      </Button>
    </div>
  ),
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Button>
        <IconBrandGoogle className='mr-2 h-4 w-4' />
        Sign in with Google
      </Button>
      <Button variant='outline'>
        <IconBrandGithub className='mr-2 h-4 w-4' />
        Sign in with GitHub
      </Button>
    </div>
  ),
};

// Loading state
export const Loading: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Button disabled variant='default'>
        <Loader2 className='h-4 w-4 animate-spin' />
        Loading...
      </Button>
    </div>
  ),
};
// Disabled state
export const Disabled: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Button disabled variant='default'>
        Default
      </Button>
      <Button disabled variant='destructive'>
        Destructive
      </Button>
      <Button disabled variant='outline'>
        Outline
      </Button>
      <Button disabled variant='secondary'>
        Secondary
      </Button>
      <Button disabled variant='ghost'>
        Ghost
      </Button>
      <Button disabled variant='link'>
        Link
      </Button>
    </div>
  ),
};
