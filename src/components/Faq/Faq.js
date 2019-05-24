import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {faqContent} from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero
      titleText = {faqContent.title}
      image = {faqContent.image}
    />
    <h3>{faqContent.question}</h3>
    <p>{faqContent.answer}</p>
    <br/>
    <h3>{faqContent.question}</h3>
    <p>{faqContent.answer}</p>    <br/>
    <h3>{faqContent.question}</h3>
    <p>{faqContent.answer}</p>    <br/>
    <h3>{faqContent.question}</h3>
    <p>{faqContent.answer}</p>
  </Container>
);

export default Faq;
