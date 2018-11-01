import React, { Component } from 'react';
import currentUserQuery from '../queries/CurrentUser';
import { graphql } from 'react-apollo';
import {hashHistory} from 'react-router';

export default (WrappedComponent) => {
class RequireAuth extends Component {
    componentDidMount() {
        if(!this.props.data.loading && !this.props.data.user) {
            hashHistory.push('/login');
        }

    }
    componentWillUpdate(nextProps) {

        if(!nextProps.data.loading && !nextProps.data.user) {
            hashHistory.push('/login');
        }

    }
    render() {
        return <WrappedComponent {...this.props} />;
    }
}

return graphql(currentUserQuery)(RequireAuth);
};