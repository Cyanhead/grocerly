import React, { useState } from 'react';

import {
  ProfilePageContainer,
  ProfilePageWrap,
  ProfilePageAside,
  ProfilePageTabGroup,
  ProfilePageTab,
  ProfilePageMain,
  ProfilePageHeading,
  ProfilePageP,
  ProfilePageContent,
  ProfilePageGrid,
  Cell,
  CellTop,
  CellBottom,
  CellButton,
  BackBtnWrap,
} from './profile-page.style';
import { signOut, updateProfile } from 'firebase/auth';
import {
  FiUser,
  FiMail,
  FiPackage,
  FiPower,
  FiEdit,
  FiChevronLeft,
} from 'react-icons/fi';
import { IconWrap } from '../../components/others.style';
import { auth } from '../../context/Firebase';
import { toast } from 'react-hot-toast';
import { useAuthContext } from '../../context/AuthContext';

import { useNavigate } from 'react-router-dom';
import { CustomForm, CustomFormInputGroup } from '../../components/Form';

const ProfilePage = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [form, setForm] = useState(false);

  const {
    signedUser: { displayName, email, emailVerified },
    setSignedUser,
  } = useAuthContext();
  const navigate = useNavigate();

  const [userName, setUserName] = useState(displayName);

  const Account = () => {
    const GridItem = props => {
      return (
        <Cell>
          <CellTop>
            <ProfilePageP>{props.itemTitle}</ProfilePageP>
            {props.editable && (
              <IconWrap
                fgHover={props => props.theme.color.primary}
                onClick={props.editOnClick}
              >
                <FiEdit />
              </IconWrap>
            )}
          </CellTop>
          <CellBottom>{props.children}</CellBottom>
          {props.button && <CellButton>{props.buttonText}</CellButton>}
        </Cell>
      );
    };

    const handleSubmit = () => {
      updateProfile(auth.currentUser, {
        displayName: userName,
      })
        .then(() => {
          // Profile updated!
        })
        .catch(error => {
          console.log(error);
        });

      setForm(false);
    };

    return (
      <>
        {form ? (
          <>
            <BackBtnWrap>
              <IconWrap
                bordRad="3px"
                fontSize="1.5rem"
                onClick={() => setForm(false)}
                bgHover={props => props.theme.color.greyHover}
                bgActive={props => props.theme.color.greyActive}
              >
                <FiChevronLeft />
              </IconWrap>
            </BackBtnWrap>

            <CustomForm
              onSubmit={handleSubmit}
              submitBtnDisableCondition={
                userName.trim() === '' || userName === displayName
              }
              submitBtnText="Submit"
            >
              <CustomFormInputGroup
                htmlFor="username"
                labelName="your name"
                requiredLabel
                inputType="text"
                inputName="username"
                inputId="username"
                inputPlaceholder="Enter a name"
                inputValue={userName}
                inputOnChange={e => setUserName(e.target.value)}
                required
              />
            </CustomForm>
          </>
        ) : (
          <ProfilePageGrid>
            <GridItem
              itemTitle="Account details"
              editable
              editOnClick={() => setForm(true)}
            >
              <ProfilePageP>{displayName} </ProfilePageP>
              <ProfilePageP>{email} </ProfilePageP>
              <ProfilePageP>
                Email status: {emailVerified ? 'Verified' : 'Unverified'}
              </ProfilePageP>
            </GridItem>
            <GridItem itemTitle="Address book">
              <ProfilePageP
                fontWght={props => props.theme.fontWght.medium}
                mar="0 0 8px 0"
              >
                Your default shipping address:
              </ProfilePageP>
              <ProfilePageP>{displayName} </ProfilePageP>
              <ProfilePageP>16 Murpy Street</ProfilePageP>
              <ProfilePageP>+1 024 4355</ProfilePageP>
            </GridItem>
          </ProfilePageGrid>
        )}
      </>
    );
  };

  const Orders = () => {
    return <h3>Coming soon...</h3>;
  };

  const Inbox = () => {
    return <h3>Coming soon...</h3>;
  };

  const pages = [
    {
      name: 'Account',
      icon: <FiUser />,
      title: `Hi, ${displayName}`,
      content: <Account />,
    },
    {
      name: 'Orders',
      icon: <FiPackage />,
      title: 'Orders',
      content: <Orders />,
    },
    {
      name: 'Inbox',
      icon: <FiMail />,
      title: 'Inbox messages',
      content: <Inbox />,
    },
  ];

  const handleLogout = () => {
    const doLogout = toast.promise(signOut(auth), {
      loading: 'Logging out...',
      success: 'logged out successfully',
      error: 'Error when logging out',
    });

    doLogout
      .then(() => {
        console.log('the user signed out');
        setSignedUser(null);
        navigate('/');
      })
      .catch(err => console.log(err.message));
  };

  return (
    <ProfilePageContainer>
      <ProfilePageWrap>
        <ProfilePageAside>
          <ProfilePageTabGroup>
            {pages.map((tab, i) => {
              return (
                <ProfilePageTab
                  key={i}
                  onClick={() => setCurrentTab(i)}
                  active={currentTab === i}
                >
                  <IconWrap pad="4px 8px 4px 4px">{tab.icon}</IconWrap>
                  {tab.name}
                </ProfilePageTab>
              );
            })}
          </ProfilePageTabGroup>
          <ProfilePageTab onClick={handleLogout}>
            <IconWrap>
              <FiPower />
            </IconWrap>
            Log out
          </ProfilePageTab>
        </ProfilePageAside>
        <ProfilePageMain>
          <ProfilePageHeading>{pages[currentTab].title}</ProfilePageHeading>
          <ProfilePageContent>{pages[currentTab].content}</ProfilePageContent>
        </ProfilePageMain>
      </ProfilePageWrap>
    </ProfilePageContainer>
  );
};

export default ProfilePage;
