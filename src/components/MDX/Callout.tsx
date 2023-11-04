import { cn } from '@/lib/utils';

interface CalloutProps {
  icon?: string;
  children?: React.ReactNode;
  type?: 'default' | 'warning' | 'danger';
}

export function Callout({
  children,
  icon,
  type = 'default',
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn('my-2 flex items-start rounded-md border border-l-4 p-4', {
        'border-primary': type === 'default',
        'border-error bg-error/10': type === 'danger',
        'border-warning bg-warning/10': type === 'warning',
      })}
      {...props}
    >
      {icon && <span className='mr-4 text-2xl'>{icon}</span>}
      <div>{children}</div>
    </div>
  );
}
