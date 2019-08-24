import React from 'react';
import {connect}      from 'react-redux';

const Temp = ({unit, temp}) => {
  if(!unit || !temp) return null;
  const whichUnit = unit==='C' ? 'Metric' : 'Imperial';
  const degrees = temp[whichUnit].Value;
  return (
    <div className='Temp'>
      {degrees}°{unit}
    </div>
  )
}

const mapStateToProps = ({unit}) => ({unit});
export default connect(mapStateToProps)(Temp);
