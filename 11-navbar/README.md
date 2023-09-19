# NAVBAR

[![Navbar](./design/11-navbar.png)](https://react-11-navbars.netlify.app)

## Steps

#### Initial Approach

Set up a Navbar component with a showLinks state value (boolean). Import the links from data and render them conditionally in the Navbar based on the showLinks state value. Set up a button that toggles the value and as a result, toggles the links. Set up CSS for the Navbar.

#### Fixed Approach

Hide links by default in the CSS. Create a class that displays links with a fixed height. Refactor the JSX in the Navbar to toggle the class, which in turn toggles the Navbar.

#### Dynamic Approach

Use the useRef and getBoundingClientRect() function, to get exact height of links

[Javascript Nuggets - Width/Height](https://www.youtube.com/watch?v=v8YENdbDv1w&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=20)

#### Complete App

Finally, add social links and CSS to render the Navbar on the big screen.

#### Application Flow

The flow of the application should look something like this:

- Check the data.js file and find two arrays: one for links and one for social icons.

- Set up a Navbar component with a showLinks state value (boolean). Import the links from data and render them conditionally in the Navbar based on the showLinks state value. Set up a button that toggles the value and as a result, toggles the links. Set up CSS for the Navbar.

- Hide links by default in the CSS. Create a class that displays links with a fixed height. Refactor the JSX in the Navbar to toggle the class, which in turn toggles the Navbar.

- Use the useRef and getBoundingClientRect() function, to get exact height of links

- Add social links and CSS to render the Navbar on the big screen.

#### Initial Approach

Navbar.jsx

```js
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        {showLinks && (
          <div className='links-container'>
            <ul className='links'>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
```

#### Fixed Approach

```css
.links-container {
  height: 0;
  overflow: hidden;
  transition: var(--transition);
}
.show-container {
  height: 10rem;
}
```

```js
<div
  className={showLinks ? 'links-container show-container' : 'links-container'}
>
  <ul className='links'>....links</ul>
</div>
```

#### Dynamic Approach

```css
.links-container {
  overflow: hidden;
  transition: var(--transition);
}
```

```js
import { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className='links-container'
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

## Author

- Portfolio - [@mraditya1999](https://www.adityayadav.live)
- Twitter - [@mraditya1999](https://twitter.com/mraditya1999)
- Linkedin - [@mraditya1999](https://www.linkedin.com/in/mraditya1999/)
- Medium - [@mraditya1999](https://medium.com/@mraditya1999)
- Frontend Mentor - [@mraditya1999](https://www.frontendmentor.io/profile/Aditya-oss-creator)
