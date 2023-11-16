import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import { MdOutlineArrowDropDown } from 'react-icons/md';

import accordionData from '../../utils/accordion';
import value from '../../assets/value.png';
import './Value.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useState } from 'react';

const Value = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [className, setClassName] = useState('collapsed');

  const toggleClassName = () => {
    setIsExpanded(!isExpanded);
    isExpanded ? setClassName('expanded') : setClassName('collapsed');
  };

  return (
    <section className='v-wrapper'>
      <div className='paddings innerWidth flexCenter v-container'>
        {/* Left Side */}
        <div className='v-left'>
          <div className='image-container'>
            <img src={value} alt={value} />
          </div>
        </div>

        {/* Right Side */}
        <div className='flexColStart v-right'>
          <span className='orangeText'>Our Value</span>
          <span className='primaryText'>Value We Give To You</span>
          <span className='secondaryText'>
            We always ready to help by providing the best services for you.
            <br />
            We believe good place to live can make your life better.
          </span>

          <Accordion
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {accordionData.map(({ icon, heading, detail }, index) => {
              return (
                <AccordionItem
                  key={index}
                  uuid={index}
                  className={`accordionItem ${className}`}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className='accordionButton'
                      onClick={toggleClassName}
                    >
                      <div className='flexCenter icon'>{icon}</div>
                      <span className='primaryText'>{heading}</span>
                      <div className='flexCenter icon'>
                        {<MdOutlineArrowDropDown size={20} />}
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className='secondaryText'>{detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
