import React from 'react';
import classes from './IceCream.module.css'
import Scoop from './Scoop/Scoop'

const IceCream = () => {

  return (
    <div>
        <div className={classes.icecream}>
            <p className={classes.cone}/>                        
            <Scoop />
            <div className={classes.cherry} />
        </div>
  </div>
  );
};

export default IceCream;