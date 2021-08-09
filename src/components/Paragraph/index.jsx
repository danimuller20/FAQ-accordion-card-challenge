import { useState } from 'react';
import P from 'prop-types';
import styles from './paragraph.module.scss';
import iconArrow from '../../images/icon-arrow-down.svg';

export const Paragraph = ({ buttonContent, paragraphContent }) => {
  const [hideContent, setHideContent] = useState(true);
  return (
    <div className={styles.contentContainer}>
      <button className={!hideContent && styles.btnState} type="button" onClick={() => setHideContent(!hideContent)}>
        {buttonContent}
        <img src={iconArrow} alt="Arrow icons" />
      </button>
      <p className={hideContent ? styles.hidedContent : styles.showContent}>{paragraphContent}</p>
      <hr></hr>
    </div>
  );
};

Paragraph.propTypes = {
  buttonContent: P.string.isRequired,
  paragraphContent: P.string.isRequired,
};
