import React, { Component } from 'react';
import './App.css';

class App extends Component { // 이코드는 App이라는 클래스를 선언합니다. 새로운 컴포넌트를 만들 때는 이렇게 클래스를 선언합니다.
	render() {// 이 함수 내부에서는 컴포넌트를 유저에게 어떻게 보일지 return합니다.
		const text = '당신은 어썸한가요?';
		const condition = true;
		const style = {
			backgroundColor: 'gray',
			border: '1px solid black',
			height: Math.round(Math.random() * 300) + 50,
			width: Math.round(Math.random() * 300) + 50,
			WebkitTransition: 'all',
			MozTransition: 'all',
			msTransition: 'all'
		};
		return (
			<div className="my-div">
				{/* 요소 밖에서는 이렇게 작성해요 */}
				<h1>리액트 안녕!</h1>
				<h2>{text}</h2>
				{ condition && '보여주세요' }
				<div
					style={style}
					// self-closed 태그에서만 작동하는 주석
					// 마지막 />가 꼭 새 줄에 있어야 합니다.
					/* 이렇게 작성할 수도 있고요. */
				/>
				// 여기 쓰는 건 그대로 렌더링 됩니다.
				/* 여기에선 주석 못 써요 */
			</div>
		);
	}
}

export default App;
