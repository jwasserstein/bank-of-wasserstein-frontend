import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import './ProfilePage.css';
import dayjs from 'dayjs';
import {apiCall} from '../services/api';
import Message from '../components/Message';
import Form from '../components/Form';

class ProfilePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentPassword: '',
            newPassword: '',
            repeatNewPassword: '',
            loading: false,
            message: '',
            messageColor: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({...this.state, [e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        if(this.state.newPassword !== this.state.repeatNewPassword){
            return this.setState({...this.state,
                        currentPassword: '',
                        newPassword: '',
                        repeatNewPassword: '',
                        message: 'New passwords must match',
                        messageColor: 'red'
                    });
        }

        this.setState({...this.state, loading: true});
        apiCall('POST', `/auth/changePassword/${this.props.userId}`, {
            currentPassword: this.state.currentPassword,
            newPassword: this.state.newPassword,
            repeatNewPassword: this.state.repeatNewPassword
        }, localStorage.token)
            .then(response => {
                    const message = 'error' in response ? response.error : response.message;
                    const color = 'error' in response ? 'red' : 'green';
                    this.setState({
                        currentPassword: '',
                        newPassword: '',
                        repeatNewPassword: '',
                        loading: false,
                        message: message,
                        messageColor: color
                    });
            });
    }

    render() {
        const fields = [
            {label: 'Current Password', name: 'currentPassword', type: 'password', value: this.state.currentPassword},
            {label: 'New Password', name: 'newPassword', type: 'password', value: this.state.newPassword},
            {label: 'Repeat New Password', name: 'repeatNewPassword', type: 'password', value: this.state.repeatNewPassword}
        ];

        return (
            <div style={{marginBottom: '20px'}}>
                <Navbar />
                <h2 className='ProfilePage-message'>View your profile.</h2>
                <div className='ProfilePage-fields'>
                    <div>
                        <h3 className='ProfilePage-field-title'>Username</h3>
                        <p className='ProfilePage-field-value'>{this.props.username}</p>
                    </div>
                    <div>
                        <h3 className='ProfilePage-field-title'>Email</h3>
                        <p className='ProfilePage-field-value'>{this.props.email}</p>
                    </div>
                    <div>
                        <h3 className='ProfilePage-field-title'>Join Date</h3>
                        <p className='ProfilePage-field-value'>{dayjs(this.props.joinDate).format('MM/DD/YYYY h:mmA')}</p>
                    </div>
                </div>
                <h2 className='ProfilePage-message'>Change your password.</h2>
                {this.state.message && (
                    <Message color={this.state.messageColor} >
                        {this.state.message}
                    </Message>
                )}
                <Form onSubmit={this.onSubmit} 
                        onChange={this.onChange}
                        fields={fields}
                        loading={this.state.loading}/>
                
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        userId: state.authReducer.userId,
        username: state.authReducer.username,
        email: state.authReducer.email,
        joinDate: state.authReducer.joinDate
    };
}

export default connect(mapStateToProps, null)(ProfilePage);