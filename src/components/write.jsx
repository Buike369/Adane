import React ,{useState}from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {

    const [value, setValue] = useState('');
    console.log(value)
  return (
    <div>
        <div style={{width:"80%"}}><ReactQuill theme="snow" value={value} onChange={setValue} /></div>

    </div>
  )
}

export default Write