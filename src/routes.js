import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';

const Records = () => {
    return <div>All Records</div>
}

const PatientRecord = () => {
    return <div>Patient Record</div>
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex} />
        <Route path="records" component={Records} />
        <Route path="patient-record" component={PatientRecord} />
    </Route>
);
