import { ViewProps } from '@tarojs/components'
import { Stack } from '../Stack'
import { ResponsiveValue } from '../utils'

export interface VStackProps extends ViewProps {
  spacing?: ResponsiveValue<number | string>
  children: React.ReactNode
}

export const VStack = (props: VStackProps) => {
  let { spacing, children, ...rest } = props
  return (
    <Stack spacing={spacing} direction='column' {...rest}>
      {children}
    </Stack>
  )
}
