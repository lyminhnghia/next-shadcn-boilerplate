import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import '@/styles/globals.css';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

const meta: Meta<typeof Toaster> = {
  title: 'UI/Toast',
  component: Toaster,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Toaster>;

// Toast provider wrapper
const ToastDemo = ({ children }: { children: React.ReactNode }) => (
  <>
    {children}
    <Toaster />
  </>
);

// Basic toast
export const Default: Story = {
  render: () => {
    return (
      <ToastDemo>
        <Button
          variant='outline'
          onClick={() => {
            toast('Scheduled: Catch up', {
              description: 'Friday, February 10, 2023 at 5:57 PM'
            });
          }}
        >
          Show Toast
        </Button>
      </ToastDemo>
    );
  }
};

// Toast with action
export const WithAction: Story = {
  render: () => {
    return (
      <ToastDemo>
        <Button
          variant='outline'
          onClick={() => {
            toast('Uh oh! Something went wrong.', {
              description: 'There was a problem with your request.',
              action: {
                label: 'Try again',
                onClick: () => {}
              }
            });
          }}
        >
          Show Toast with Action
        </Button>
      </ToastDemo>
    );
  }
};

// Toast with different variants
export const Variants: Story = {
  render: () => {
    return (
      <ToastDemo>
        <div className='flex flex-wrap gap-4'>
          <Button
            variant='outline'
            onClick={() => {
              toast('Default toast', {
                description: 'This is a default toast message.'
              });
            }}
          >
            Default
          </Button>
          <Button
            variant='outline'
            onClick={() => {
              toast.error('Error', {
                description: 'Something went wrong. Please try again.'
              });
            }}
          >
            Error
          </Button>
          <Button
            variant='outline'
            onClick={() => {
              toast.success('Success', {
                description: 'Your action was completed successfully.'
              });
            }}
          >
            Success
          </Button>
          <Button
            variant='outline'
            onClick={() => {
              toast.warning('Warning', {
                description: 'Please review your changes before proceeding.'
              });
            }}
          >
            Warning
          </Button>
        </div>
      </ToastDemo>
    );
  }
};

// Toast with rich content
export const WithRichContent: Story = {
  render: () => {
    return (
      <ToastDemo>
        <Button
          variant='outline'
          onClick={() => {
            toast('New message received', {
              description: (
                <div className='mt-2 grid gap-2'>
                  <div className='flex items-center gap-2'>
                    <div className='h-2 w-2 rounded-full bg-green-500' />
                    <p className='text-sm'>Message from John Doe</p>
                  </div>
                  <p className='text-muted-foreground text-sm'>
                    &quot;Hey, I&apos;ve sent you the latest design
                    files...&quot;
                  </p>
                </div>
              ),
              action: {
                label: 'Reply',
                onClick: () => {}
              }
            });
          }}
        >
          Show Rich Toast
        </Button>
      </ToastDemo>
    );
  }
};

// Toast with custom duration
export const WithCustomDuration: Story = {
  render: () => {
    return (
      <ToastDemo>
        <Button
          variant='outline'
          onClick={() => {
            toast('Custom duration', {
              description: 'This toast will stay for 10 seconds.',
              duration: 10000
            });
          }}
        >
          Show Long Toast
        </Button>
      </ToastDemo>
    );
  }
};

// Multiple toasts
export const MultipleToasts: Story = {
  render: () => {
    return (
      <ToastDemo>
        <Button
          variant='outline'
          onClick={() => {
            toast('First toast', {
              description: 'This is the first toast message.'
            });
            toast('Second toast', {
              description: 'This is the second toast message.'
            });
            toast('Third toast', {
              description: 'This is the third toast message.'
            });
          }}
        >
          Show Multiple Toasts
        </Button>
      </ToastDemo>
    );
  }
};
