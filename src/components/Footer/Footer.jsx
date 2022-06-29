import React from 'react';

import {
  FooterContainer,
  FooterWrap,
  FooterTop,
  Column,
  ColHead,
  ColBody,
  ColLink,
  FooterP,
  ContactRow,
  FooterBottom,
  Copyright,
  PaymentImg,
  SocialWrap,
  SocialLink,
} from './footer.style';

import Logo from '../Logo';
import { IconWrap } from '../others.style';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import {
  RiFacebookFill,
  RiLinkedinFill,
  RiInstagramFill,
  RiTwitterFill,
} from 'react-icons/ri';
import payments from '../../assets/images/payments.webp';

const Footer = () => {
  const ContactInfoGenerator = () => {
    const contactInfo = [
      {
        icon: <FiMapPin />,
        title: 'address',
        content: '1762 School House Road',
      },
      { icon: <FiPhone />, title: 'call us', content: '1233-777' },
      {
        icon: <FiMail />,
        title: 'email',
        content: 'grocerly@contact.com',
        anotherCase: true,
      },
      {
        icon: <FiClock />,
        title: 'work hours',
        content: '8:00 - 20:00, Sunday -  Thursday',
      },
    ];

    return (
      <ColBody mar="36px 0 0 0">
        {contactInfo.map((info, i) => {
          return (
            <ContactRow key={i}>
              <IconWrap fg={props => props.theme.color.primary}>
                {info.icon}
              </IconWrap>
              <FooterP
                fontWght={props => props.theme.fontWght.semibold}
                mar="0 8px 0 0"
              >
                {info.title}:
              </FooterP>
              <FooterP textTrans={info.anotherCase ? 'lowercase' : ''}>
                {info.content}
              </FooterP>
            </ContactRow>
          );
        })}
      </ColBody>
    );
  };

  const ColumnGenerator = () => {
    const colLinksData = [
      {
        colHead: 'account',
        links: [
          { name: 'wishlist', url: '' },
          { name: 'cart', url: '' },
          { name: 'track order', url: '' },
          { name: 'shipping details', url: '' },
        ],
      },
      {
        colHead: 'useful links',
        links: [
          { name: 'about us', url: '' },
          { name: 'contact', url: '' },
          { name: 'hot deals', url: '' },
          { name: 'promotions', url: '' },
          { name: 'new products', url: '' },
        ],
      },
      {
        colHead: 'help center',
        links: [
          { name: 'payments', url: '' },
          { name: 'refund', url: '' },
          { name: 'checkout', url: '' },
          { name: 'shipping', url: '' },
          { name: 'q & a', url: '' },
          { name: 'privacy policy', url: '' },
        ],
      },
    ];

    return (
      <>
        {colLinksData.map((col, i) => {
          return (
            <Column key={i}>
              <ColHead> {col.colHead} </ColHead>
              <ColBody>
                {col.links.map((link, i) => {
                  return (
                    <ColLink href={link.url} key={i} mar="0 0 16px 0">
                      <FooterP> {link.name} </FooterP>
                    </ColLink>
                  );
                })}
              </ColBody>
            </Column>
          );
        })}
      </>
    );
  };

  const FooterSocialIconGenerator = () => {
    const socials = [
      { icon: <RiFacebookFill />, url: '' },
      { icon: <RiLinkedinFill />, url: '' },
      { icon: <RiInstagramFill />, url: '' },
      { icon: <RiTwitterFill />, url: '' },
    ];

    return (
      <SocialWrap>
        {socials.map((medium, i) => {
          return (
            <SocialLink key={i} href={medium.url}>
              <IconWrap
                bg={props => props.theme.color.primary}
                bgHover={props => props.theme.color.primaryHover}
                fg={props => props.theme.color.white}
                mar="0 0 0 16px"
                pad="10px"
                bordRad="50%"
              >
                {medium.icon}
              </IconWrap>
            </SocialLink>
          );
        })}
      </SocialWrap>
    );
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterTop>
          <Column>
            <Logo />
            <ContactInfoGenerator />
          </Column>
          <ColumnGenerator />
        </FooterTop>
        <FooterBottom>
          <Copyright>
            <FooterP>
              &copy; {new Date().getFullYear()} Grocerly, all rights reserved.{' '}
            </FooterP>
          </Copyright>
          <PaymentImg src={payments} alt="" />
          <FooterSocialIconGenerator />
        </FooterBottom>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
