import React from 'react';
import ResumeItem from '../ResumeItem';

import * as C from './styles'

function Resumo(props) {
    return (
        <C.Container>
            <ResumeItem/>
            <ResumeItem/>
            <ResumeItem/>
        </C.Container>
    );
}

export default Resumo;