import React, { useState } from 'react';

interface Props {
  initialUserName: string;
  onNameUpdated: (newName:string) => void;
}

export const NameEditComponent:React.FC<Props> = ({initialUserName,
   onNameUpdated}) => {
  const [editingName, setEditingName] = useState(initialUserName) // data 自有数据
  const onChange = (event: any) => {
    setEditingName(event.target.value)
  }
  const onNameSubmit = () => {
    onNameUpdated(editingName)
  }
  return (
    <>
      <label>Update name</label>
      <input type="text" value={editingName} onChange={onChange} />
      <button onClick={onNameSubmit}>Change</button>
    </>
  )
}
