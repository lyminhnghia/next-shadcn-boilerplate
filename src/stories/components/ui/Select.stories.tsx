import type { Meta, StoryObj } from '@storybook/react';
import '@/styles/globals.css';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Select>;

// Basic select
export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a fruit' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='apple'>Apple</SelectItem>
        <SelectItem value='banana'>Banana</SelectItem>
        <SelectItem value='orange'>Orange</SelectItem>
        <SelectItem value='grape'>Grape</SelectItem>
      </SelectContent>
    </Select>
  )
};

// Select with label
export const WithLabel: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='framework'>Framework</Label>
      <Select>
        <SelectTrigger id='framework'>
          <SelectValue placeholder='Select a framework' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='next'>Next.js</SelectItem>
          <SelectItem value='svelte'>SvelteKit</SelectItem>
          <SelectItem value='astro'>Astro</SelectItem>
          <SelectItem value='nuxt'>Nuxt.js</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
};

// Select with groups
export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className='w-[280px]'>
        <SelectValue placeholder='Select a country' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value='us'>United States</SelectItem>
          <SelectItem value='ca'>Canada</SelectItem>
          <SelectItem value='mx'>Mexico</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value='uk'>United Kingdom</SelectItem>
          <SelectItem value='fr'>France</SelectItem>
          <SelectItem value='de'>Germany</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value='jp'>Japan</SelectItem>
          <SelectItem value='kr'>South Korea</SelectItem>
          <SelectItem value='cn'>China</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
};

// Disabled select
export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select an option' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='option1'>Option 1</SelectItem>
        <SelectItem value='option2'>Option 2</SelectItem>
        <SelectItem value='option3'>Option 3</SelectItem>
      </SelectContent>
    </Select>
  )
};

// Select with error state
export const WithError: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='framework' className='text-destructive'>
        Framework
      </Label>
      <Select>
        <SelectTrigger id='framework' className='border-destructive'>
          <SelectValue placeholder='Select a framework' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='next'>Next.js</SelectItem>
          <SelectItem value='svelte'>SvelteKit</SelectItem>
          <SelectItem value='astro'>Astro</SelectItem>
          <SelectItem value='nuxt'>Nuxt.js</SelectItem>
        </SelectContent>
      </Select>
      <p className='text-destructive text-sm'>Please select a framework.</p>
    </div>
  )
};

// Select with helper text
export const WithHelperText: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='theme'>Theme</Label>
      <Select>
        <SelectTrigger id='theme'>
          <SelectValue placeholder='Select a theme' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='light'>Light</SelectItem>
          <SelectItem value='dark'>Dark</SelectItem>
          <SelectItem value='system'>System</SelectItem>
        </SelectContent>
      </Select>
      <p className='text-muted-foreground text-sm'>
        Select your preferred theme for the application.
      </p>
    </div>
  )
};
