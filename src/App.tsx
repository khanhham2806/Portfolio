import Portfolio from '@/screens/Portfolio'
import { Button, ConfigProvider, Space } from 'antd';
import '@/styles/plugins.scss';
import '@/styles/style.scss';
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Open Sans"
        }
      }}
    >
      <Portfolio />
    </ConfigProvider>

  )
}

export default App
