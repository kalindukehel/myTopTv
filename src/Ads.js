import React from 'react';

class AdComponent extends React.Component {
  componentWillMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client=''
          data-ad-slot=''
          data-ad-format='auto' />
    );
  }
}

export default AdComponent