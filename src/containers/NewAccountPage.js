import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import {createAccount} from '../store/actions/accounts';
import Message from '../components/Message';
import './NewAccountPage.css';

class NewAccountPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            accountType: '',
            err: '',
            loading: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({...this.state, [e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        this.setState({...this.state, loading: true});
        this.props.createAccount(this.state.accountType)
            .then(() => {
                this.setState({...this.state, loading: false, err: ''});
                this.props.history.push('/accounts');
            })
            .catch(err => {
                this.setState({...this.state, loading: false, err: err.message});
            });
    }

    render(){
        const existingAccounts = this.props.accounts.map(a => a.type);

        return (
            <div>
                <Navbar />
                <h2 className='NewAccountPage-message'>Select an account type.</h2>
                {this.state.err && (
                    <Message>
                        {this.state.err}
                    </Message>
                )}
                <form className='NewAccountForm-form' onSubmit={this.onSubmit}>
                    <div className='NewAccountPage-radio-container'>
                        <div>
                            <input type='radio' id='Checking' className='NewAccountPage-radio' value='Checking' name='accountType' 
                                onChange={this.onChange} checked={this.state.accountType === 'Checking'} disabled={existingAccounts.includes('Checking')}/>

                            <label htmlFor='Checking' className={existingAccounts.includes('Checking') ? 'NewAccountPage-disabled': ''}>Checking</label>
                        </div>
                        <div>
                            <input type='radio' id='Savings' className='NewAccountPage-radio' value='Savings' name='accountType' 
                                onChange={this.onChange} checked={this.state.accountType === 'Savings'} disabled={existingAccounts.includes('Savings')}/>
                                
                            <label htmlFor='Savings' className={existingAccounts.includes('Savings') ? 'NewAccountPage-disabled': ''}>Savings</label>
                        </div>
                        <div>
                            <input type='radio' id='Investing' className='NewAccountPage-radio' value='Investing' name='accountType' 
                                onChange={this.onChange} checked={this.state.accountType === 'Investing'} disabled={existingAccounts.includes('Investing')}/>
                                
                            <label htmlFor='Investing' className={existingAccounts.includes('Investing') ? 'NewAccountPage-disabled': ''}>Investing</label>
                        </div>
                    </div>
                    <button type='submit' className='NewAccountForm-form-btn'>
                        {this.state.loading ? 'Loading...' : 'Create Account'}
                    </button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        accounts: state.accountReducer.accounts
    };
}

export default connect(mapStateToProps, {createAccount})(NewAccountPage);