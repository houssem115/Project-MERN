import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle,
   MDBCardText, MDBRow, MDBCol,MDBIcon,MDBTooltip,MDBCardFooter, MDBContainer} from 'mdbreact';
import './style.css'
import NavbarPage from './Navbar'
import  AnimationPage from './Head'
import FooterPage from './Footer'
class CardJardin extends Component {
  render() {
    return (<MDBContainer className='BTN'>
      <AnimationPage/>
      <NavbarPage/>
      <MDBRow>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            
            </MDBCardBody>
            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>51DT</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-shopping-cart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-share-alt mr-3' />
                    <span>Share</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
          
          </MDBCard>
        </MDBCol>
        
        


        <MDBCol>
          <MDBCard narrow>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              
            </MDBCardBody>
            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>90DT</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-shopping-cart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-share-alt mr-3' />
                    <span>Share</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              
            </MDBCardBody>

            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>76DT</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-shopping-cart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-share-alt mr-3' />
                    <span>Share</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>


          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            
            </MDBCardBody>
            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>51DT</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-shopping-cart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-share-alt mr-3' />
                    <span>Share</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
          
          </MDBCard>
        </MDBCol>
        
        


        <MDBCol>
          <MDBCard narrow>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              
            </MDBCardBody>
            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>90DT</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-shopping-cart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-share-alt mr-3' />
                    <span>Share</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              
            </MDBCardBody>

            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>76DT</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-shopping-cart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-share-alt mr-3' />
                    <span>Share</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>


          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            
            </MDBCardBody>
            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>51DT</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-shopping-cart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-share-alt mr-3' />
                    <span>Share</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
          
          </MDBCard>
        </MDBCol>
        
        


        <MDBCol>
          <MDBCard narrow>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              
            </MDBCardBody>
            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>90DT</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-shopping-cart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-share-alt mr-3' />
                    <span>Share</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              
            </MDBCardBody>

            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>76DT</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-shopping-cart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-share-alt mr-3' />
                    <span>Share</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>


          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            
            </MDBCardBody>
            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>51DT</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-shopping-cart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-share-alt mr-3' />
                    <span>Share</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
          
          </MDBCard>
        </MDBCol>
        
        


        <MDBCol>
          <MDBCard narrow>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              
            </MDBCardBody>
            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>90DT</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-shopping-cart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-share-alt mr-3' />
                    <span>Share</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              
            </MDBCardBody>

            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>76DT</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-shopping-cart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-share-alt mr-3' />
                    <span>Share</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>


          </MDBCard>
        </MDBCol>
      </MDBRow>
      <FooterPage/>
</MDBContainer>      
      
    )
  }
}

export default CardJardin;