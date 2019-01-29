import React, { Component } from 'react';
import PropTypes from 'prop-types'; // propTypes를 사용하려면 우선 코드 위쪽에 propTypes를 불러와야 합니다.

class MyComponent extends Component {
	static defaultProps = {
		name: '기본 이름'
	}

	render() {
		return (
			<div>
				안녕하세요, 제 이름은 {this.props.name} 입니다.
			</div>
		)
	}
}

MyComponent.propTypes = {
	name: PropTypes.string // name props 타입을 문자열로 설정합니다.
}

export default MyComponent; //이 코드는 다른 파일에서 이 파일을 import할 때, 위쪽에서 선언한 MyComponet 클래스를 블러오도록 설정합니다.
