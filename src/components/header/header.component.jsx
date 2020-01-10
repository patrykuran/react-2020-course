import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from "../../firebase/firebase.utils";

import {createStructuredSelector} from "reselect";

import {HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer} from './header.styles';

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';

const Header = ({currentUser, cart}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo'/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {currentUser ?
        <OptionDiv onClick={() => {
          auth.signOut()
        }}>SIGN OUT</OptionDiv>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon/>
      {cart && <CartDropdown/>}
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cart: selectCartHidden
});

export default connect(mapStateToProps)(Header);
