import { Input, View } from '@tarojs/components'
import { Container, HStack, Stack, VStack } from '@/components'

const Index = () => {
  return (
    <VStack style={{ width: '100%', height: '100vh' }}>
      <View>hello world</View>
      <View>hello world</View>
      <Input
        style={{ width: '100%' }}
        type='text'
        placeholder='最大输入长度为 200'
        maxlength={200}
      />
    </VStack>
  )
}

export default Index
