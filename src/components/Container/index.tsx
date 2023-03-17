import { MatchMedia, View } from '@tarojs/components'
import './index.scss'

type ContainerProps = {
  children: React.ReactNode
  maxSize?: string
}

export const Container = (props: ContainerProps) => {
  return <View className='container'>{props.children}</View>
}
