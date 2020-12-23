import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createAccount} from '../store/actions/accounts';
import Message from '../components/Message';
import Button from '../components/Button';
import RadioContainer from '../components/RadioContainer';
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
        const radios = [
            {label: 'Checking', checked: this.state.accountType === 'Checking', disabled: existingAccounts.includes('Checking')},
            {label: 'Savings', checked: this.state.accountType === 'Savings', disabled: existingAccounts.includes('Savings')},
            {label: 'Investing', checked: this.state.accountType === 'Investing', disabled: existingAccounts.includes('Investing')},
        ];

        return (
            <div>
                <h2 className='NewAccountPage-message'>Select an account type.</h2>
                {this.state.err && (
                    <Message>
                        {this.state.err}
                    </Message>
                )}
                <form className='NewAccountForm-form' onSubmit={this.onSubmit}>
                    <RadioContainer radios={radios} name='accountType' onChange={this.onChange} />
                    <Button form className='NewAccountForm-form-btn'>
                        {this.state.loading ? 'Loading...' : 'Create Account'}
                    </Button>
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