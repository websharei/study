import React, { Component } from 'react';
import PropTypes from 'prop-types'; // propTypes를 사용하려면 우선 코드 위쪽에 propTypes를 불러와야 합니다.

class MyComponent extends Component {
	static defaultProps = {
		name: '기본 이름'
	}

	static propTypes = {
		name: PropTypes.string, // name props 타입을 문자열로 설정합니다.
		age: PropTypes.number.isRequired // 필수적으로 존재해야 하며, 숫자입니다.
	}
	
	constructor(props) {
		super(props);
		this.state = {
			number: 0
		}
	}

	render() {
		return (
			<div>
				<p>안녕하세요, 제 이름은 {this.props.name} 입니다.</p>
				<p>저는 {this.props.age}살 입니다.</p>
				<p>숫자: {this.state.number}</p>
			</div>
		)
	}
}

export default MyComponent; //이 코드는 다른 파일에서 이 파일을 import할 때, 위쪽에서 선언한 MyComponet 클래스를 블러오도록 설정합니다.
