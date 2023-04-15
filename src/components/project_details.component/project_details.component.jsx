import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import FixedSizeImage from '../image_size.component';
import ImageGrid from '../grid.component';
import './project_details.styles.scss';

export default function MyVerticallyCenteredModal(props) {
    const show_whole_image = false;
    const images = 
      {
        "wardrobe" : ['https://5.imimg.com/data5/SELLER/Default/2021/9/CM/HK/FR/14621395/modern-bedroom-cupboard-designing-1000x1000.jpg','data:image/jpeg;base64,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','https://images.homify.com/c_fill,f_auto,q_0,w_740/v1498120018/p/photo/image/2079861/Buy_Wooden_Cupboard_Online_IN_India.jpg','https://i.pinimg.com/564x/53/9e/eb/539eeb9cdbddd768d5de1cda34d87fa3.jpg','https://bespokedecor.in/wp-content/uploads/2022/01/blog18.jpg'],
        "hall" :    ['data:image/jpeg;base64,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'],
        "kitchen": ['data:image/jpeg;base64,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'],
        "bedroom":[]
      } 
    //const tags= ["wardrobe", "hall", "kitchen","bedroom","livingroom","bathroom","diningroom","studyroom","balcony","garden","others"];
    const tags= ["wardrobe", "hall", "kitchen","bedroom"];
    const handleImageClick = (tag) => {
      setSelectedImage(images[tag][0]);
      setIndex(tag);
    };
    const [selectedImage, setSelectedImage] = useState(images[tags[0]][0]);
    const [tag, setIndex] = useState(tags[0]);
   
      
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton={false}>
        <Modal.Title id="contained-modal-title-vcenter">
          <div  style={{ backgroundColor: '#fff', padding: '10px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridGap: '10px',marginBottom: '10px' }}>
              {tags.map((curr_tag) => (
                <Button style={{
                  backgroundColor: `${tag == curr_tag ? 'rgb(30,32,37)' : ''}`,
                  color: `${tag == curr_tag ? '#fff' : ''}`,
                  fontSize: '16px',
                  borderRadius: '4px',
                  padding: '10px 30px',
                }} class="Headerbutton" variant="contained" onClick={() => handleImageClick(curr_tag)}>{curr_tag}</Button>
              )
              )}
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{height:'480px',overflowY:"scroll"}}>
        {show_whole_image && selectedImage &&  <FixedSizeImage src={selectedImage} width="200px" height="400" />}
        {!show_whole_image  && <ImageGrid images={images[tag]} />}
      </Modal.Body>
      <Modal.Footer>
        <Button style={{backgroundColor:'rgb(30,32,37)',padding: '10px 40px',borderColor:'rgb(30,32,37)'}}onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
