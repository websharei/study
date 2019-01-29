import React, { Component } from 'react';

class MyComponent extends Component {
	render() {
		return (
			<div>
				안녕하세요, 제 이름은 {this.props.name} 입니다.
			</div>
		)
	}
}

MyComponent.defaultProps = {
	name: '기본 이름'
}

export default MyComponent; //이 코드는 다른 파일에서 이 파일을 import할 때, 위쪽에서 선언한 MyComponet 클래스를 블러오도록 설정합니다.
