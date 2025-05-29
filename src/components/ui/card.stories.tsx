import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import '@/styles/globals.css';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// Basic card
export const Default: Story = {
  render: () => (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
};

// Card with form
export const WithForm: Story = {
  render: () => (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Create Project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' placeholder='Name of your project' />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='framework'>Framework</Label>
              <Input id='framework' placeholder='Framework' />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='outline'>Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

// Card with image
export const WithImage: Story = {
  render: () => (
    <Card className='w-[350px]'>
      <CardHeader>
        <Image
          src='https://images.unsplash.com/photo-1522252234503-e356532cafd5'
          alt='Card cover'
          className='h-48 w-full object-cover'
        />
        <CardTitle className='mt-4'>Product Title</CardTitle>
        <CardDescription>Product Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p className='text-muted-foreground text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>Add to Cart</Button>
      </CardFooter>
    </Card>
  ),
};

// Card with stats
export const WithStats: Story = {
  render: () => (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Analytics Overview</CardTitle>
        <CardDescription>Your monthly analytics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <p className='text-muted-foreground text-sm font-medium'>Total Users</p>
            <p className='text-2xl font-bold'>1,234</p>
          </div>
          <div className='space-y-2'>
            <p className='text-muted-foreground text-sm font-medium'>Active Now</p>
            <p className='text-2xl font-bold'>123</p>
          </div>
          <div className='space-y-2'>
            <p className='text-muted-foreground text-sm font-medium'>Revenue</p>
            <p className='text-2xl font-bold'>$12,345</p>
          </div>
          <div className='space-y-2'>
            <p className='text-muted-foreground text-sm font-medium'>Growth</p>
            <p className='text-2xl font-bold'>+12.3%</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant='outline' className='w-full'>
          View Details
        </Button>
      </CardFooter>
    </Card>
  ),
};
