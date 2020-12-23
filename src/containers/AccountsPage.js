import React, {Component} from 'react';
import {connect} from 'react-redux';
import Account from '../components/Account';
import Button from '../components/Button';
import Balance from '../components/Balance';
import {getAccounts} from '../store/actions/accounts';
import './AccountsPage.css';

class AccountsPage extends Component {
    componentDidMount(){
        if(!this.props.lastUpdated){
            this.props.getAccounts();
        }
    }

    render() {
        const totalBalance = this.props.accounts && this.props.accounts.reduce((acc, next) => acc + next.accountBalance, 0);

        return (
            <div>
                <h2 className='AccountsPage-message'>Select an account.</h2>
                <div className="AccountsPage-btn-container">
                    <Button to='/accounts/new'>New Account</Button>
                    <Balance accountBalance={totalBalance} />
                </div>
                <div className="AccountsPage-container">
                    {this.props.accounts && 
                    this.props.accounts.map(a => 
                        <Account type={a.type} link={`/accounts/${a._id}`} accountBalance={a.accountBalance} key={a.type} />
                    )}
                    {!this.props.accounts.length && (
                        <div className='AccountsPage-placeholder'>
                            You don't have any accounts yet!
                        </div>
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