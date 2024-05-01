import React from 'react'
import{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const CreatePost = () => {
  const [value, setValue] = useState('');

  console.log(value)
  return (
    <div className="add">
      <div className="content"> 
      <Row>
        {/* <Form.Label column="sm" lg={2}>
          Title
        </Form.Label> */}
        <Col>
          <Form.Control size="sm" type="text" placeholder="Title" />
        </Col>
      </Row>
<br></br>
      <div className="editorContainer">
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
      
      </div>
      <div className="toolbar">
        <div className="item">item1 </div>
        <div className="item">item2 </div>
      </div>

    </div>
  )
};

export default CreatePost
