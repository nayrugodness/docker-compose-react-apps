import React from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #212428;
  }
`;


export default function works() {
return (
<div>
<GlobalStyles />
  <section className='jumbotron breadcumb no-bg'>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-12 text-center">
              <h1>Gallery</h1>
              <p>Anim pariatureeeeeee cliche reprehenderit</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container'>
    <div className='row'>

    {/* <ImageGallery/> */}

    </div>
  </section>

  <Footer />
</div>
);

}
