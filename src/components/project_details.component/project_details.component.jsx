import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import FixedSizeImage from '../image.component/image_size.component';
import ImageGrid from '../grid.component/grid.component';
import './project_details.styles.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import { addCloudinaryPrefix } from '../../utils';

export default function MyVerticallyCenteredModal({images, tags, onHide, ...otherProps}) {
    const show_whole_image = false;
    const handleImageClick = (tag) => {
      setSelectedImage(images[tag][0]);
      setIndex(tag);
    };
    const [selectedImage, setSelectedImage] = useState(images.size ? images[tags[0]][0]: 0);
    const [tag, setIndex] = useState(tags.size !== 0 ? tags[0] : 0);

  return (
    <Modal
      {...otherProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton={false}>
        <Modal.Title id="contained-modal-title-vcenter">
          <div  style={{ backgroundColor: '#fff' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridGap: '10px',marginBottom: '10px' }}>
              {tags?.map((curr_tag) => (
                <Button style={{
                  backgroundColor: `${tag == curr_tag ? '#8D8DAA' : ''}`,
                  color: `${tag == curr_tag ? '#fff' : ''}`,
                  fontSize: '16px',
                  borderRadius: '4px',
                  padding: '10px 20px',
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
        <Button style={{backgroundColor:'#8D8DAA',padding: '10px 40px',borderColor:'#8D8DAA'}}onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
