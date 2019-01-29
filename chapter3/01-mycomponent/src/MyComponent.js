import React, { Component } from 'react';

class MyComponet extends Component {
	render() {
		return (
			<div>
				나의 새롭고 멋진 컴포넌트
			</div>
		)
	}
}

export default MyComponet; //이 코드는 다른 파일에서 이 파일을 import할 때, 위쪽에서 선언한 MyComponet 클래스를 블러오도록 설정합니다.
