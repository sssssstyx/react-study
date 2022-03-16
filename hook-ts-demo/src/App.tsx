import * as React from 'react';
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit';
// ts 让我们在写代码的时候就发现问题
// ts 是 js 的超级版
export const App = () => {
  const [name,setName] = React.useState('defaultUserName');
  const setUserNameState = (newName:string) => {
    setName(newName)
  }
  return (
    <>
      <HelloComponent userName={name} />
      <NameEditComponent initialUserName={name}
       onNameUpdated={setUserNameState} />
       
    </>
  )
}

export default App;