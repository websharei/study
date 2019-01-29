import React, { Component, Fragment } from 'react';

class App extends Component { // 이코드는 App이라는 클래스를 선언합니다. 새로운 컴포넌트를 만들 때는 이렇게 클래스를 선언합니다.
	render() {// 이 함수 내부에서는 컴포넌트를 유저에게 어떻게 보일지 return합니다.
		return (
			<Fragment>
				<h1>리액트 안녕!</h1>
				<h2>당신은 어썸한가요?</h2>
			</Fragment>
		);
	}
}

export default App;
