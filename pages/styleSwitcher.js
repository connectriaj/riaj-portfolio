import * as React from 'react';
import { faCog, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const StyleSwitcher = () => {
  const setActiveStyle = (color) => {
    // show style switcher
    const styleSwitcherToggle = document.querySelector(
      '.style-switcher-toggler'
    );
    styleSwitcherToggle.addEventListener('click', () => {
      document.querySelector('.style-switcher').classList.toggle('open');
    });
    //hide style switcher
    window.addEventListener('scroll', () => {
      if (
        document.querySelector('.style-switcher').classList.contains('open')
      ) {
        document.querySelector('.style-switcher').classList.remove('open');
      }
    });
  };

  const themeChanger = (color) => {
    const changeColor = document.querySelectorAll('.change-color');
    changeColor.forEach((style, title) => {
      if (color === style.getAttribute('title')) {
        style.removeAttribute('disabled');
      } else {
        style.setAttribute('disabled', 'true');
      }
    });
  };

  // night mode
  const dayNight = (day) => {
    if (day) {
      <FontAwesomeIcon icon={faSun} />;
    }
  };

  return (
    <>
      {/* style switcher start  */}
      <section className="style-switcher">
        <div className="style-switcher-toggler s-icon">
          <FontAwesomeIcon
            onClick={() => setActiveStyle('color')}
            className="fas fa-sun fa-spin icon"
            icon={faCog}
          />
        </div>
        <div className="day-night s-icon">
          <FontAwesomeIcon
            onClick={() => dayNight(true)}
            className="fas fa-moon icon"
            icon={faMoon}
          />
        </div>
        <h4>Theme Colors</h4>
        <div className="colors">
          <span
            title="color-1"
            className="color-1 change-color disabled"
            onClick={() => themeChanger('color-1')}
          ></span>
          <span
            title="color-2"
            className="color-2 change-color disabled"
            onClick={() => themeChanger('color-2')}
          ></span>
          <span
            title="color-3"
            className="color-3 change-color disabled"
            onClick={() => themeChanger('color-3')}
          ></span>
          <span
            title="color-4"
            className="color-4 change-color disabled"
            onClick={() => themeChanger('color-4')}
          ></span>
          <span
            title="color-5"
            className="color-5 change-color disabled"
            onClick={() => themeChanger('color-5')}
          ></span>
        </div>
      </section>
    </>
  );
};

export default StyleSwitcher;
