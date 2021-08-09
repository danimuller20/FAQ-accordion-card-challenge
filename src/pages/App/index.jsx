import styles from '../../styles/app.module.scss';
import { Paragraph } from '../../components/Paragraph';
import { contents } from '../../utils/content';
import womanOnline from '../../images/illustration-woman-online-desktop.svg';
import box from '../../images/illustration-box-desktop.svg';
import bgPattern from '../../images/bg-pattern-desktop.svg';
function App() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            <img src={womanOnline} alt="Illustration woman online" />
            <img src={box} alt="box" />
            <img src={bgPattern} alt="shadow" />
          </div>
          <div className={styles.faqContainer}>
            <h1 className={styles.fontColor}>FAQ</h1>
            <div className={styles.textContainer}>
              {contents.map(({ id, button, content }) => {
                return <Paragraph key={id} buttonContent={button} paragraphContent={content} />;
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <footer className={styles.attribution}>
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href="https://github.com/danimuller20" target="_blank" rel="noreferrer">
          Daniela Muller
        </a>
        .
      </footer> */}
    </>
  );
}

export default App;
