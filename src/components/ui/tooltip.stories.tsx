import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import '@/styles/globals.css';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { InfoCircledIcon } from '@radix-ui/react-icons';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// Basic tooltip
export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

// Tooltip with icon
export const WithIcon: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='ghost' size='icon'>
            <InfoCircledIcon className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>More information about this feature</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

// Tooltip with different positions
export const Positions: Story = {
  render: () => (
    <div className='flex flex-wrap items-center justify-center gap-4 p-8'>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant='outline'>Top</Button>
          </TooltipTrigger>
          <TooltipContent side='top'>
            <p>Tooltip on top</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant='outline'>Right</Button>
          </TooltipTrigger>
          <TooltipContent side='right'>
            <p>Tooltip on right</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant='outline'>Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side='bottom'>
            <p>Tooltip on bottom</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant='outline'>Left</Button>
          </TooltipTrigger>
          <TooltipContent side='left'>
            <p>Tooltip on left</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
};

// Tooltip with delay
export const WithDelay: Story = {
  render: () => (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Delayed tooltip</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This tooltip appears after a 300ms delay</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

// Tooltip with custom styling
export const WithCustomStyling: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Custom styled tooltip</Button>
        </TooltipTrigger>
        <TooltipContent className='bg-primary text-primary-foreground'>
          <p>This tooltip has custom styling</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

// Tooltip with rich content
export const WithRichContent: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Rich content</Button>
        </TooltipTrigger>
        <TooltipContent className='w-80'>
          <div className='space-y-2'>
            <h4 className='font-medium'>Tooltip with rich content</h4>
            <p className='text-muted-foreground text-sm'>
              This tooltip contains multiple elements and more detailed information.
            </p>
            <div className='flex items-center gap-2 text-sm'>
              <span className='font-medium'>Status:</span>
              <span className='text-green-500'>Active</span>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
