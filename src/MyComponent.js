import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, favoriteNumber, children}) => { // ()에 다른 걸 넣을 수 있음
    // const {name, children} = props; // 선언함으로써 props.name 을 name으로
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다. <br/>
            children의 값은 {children}입니다. <br/>
            내가 좋아하는 숫자는 {favoriteNumber}이다.
        </div>
    );
};

MyComponent.defaultProps = {
    name : '기본 이름',
};

MyComponent.propTypes = {   // propTypes는 정수,실수 구분 없이 number로 ㅇㅇ
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired    // isRequired : 꼭 들어와야한다
};

export default MyComponent;
