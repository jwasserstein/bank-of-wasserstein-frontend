import React, {Component} from 'react';
import {connect} from 'react-redux';
import Account from '../components/Account';
import {Link} from 'react-router-dom';
import Balance from '../components/Balance';
import Navbar from './Navbar';
import {getAccounts} from '../store/actions/accounts';
import './AccountsPage.css';

class AccountsPage extends Component {
    componentDidMount(){
        if(!this.props.lastUpdated){
            this.props.getAccounts(localStorage.token);
        }
    }

    render() {
        const totalBalance = this.props.accounts && this.props.accounts.reduce((acc, next) => acc + next.accountBalance, 0);

        return (
            <div>
                <Navbar />
                <h2 className='AccountsPage-message'>Select an account.</h2>
                <div className="AccountsPage-btn-container">
                    <Link to='/accounts/new' className='AccountsPage-btn'>New Account</Link>
                    <Balance accountBalance={totalBalance} />
                </div>
                <div className="AccountsPage-container">
                    {this.props.accounts && 
                    this.props.accounts.map(a => 
                        <Account type={a.type} link={`/accounts/${a._id}`} accountBalance={a.accountBalance} key={a.type} />
                    )}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        accounts: state.accountReducer.accounts,
        lastUpdated: state.accountReducer.lastUpdated
    };
}

export default connect(mapStateToProps, {getAccounts})(AccountsPage);