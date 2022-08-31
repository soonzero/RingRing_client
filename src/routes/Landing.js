import Header from '../components/Header';
import LoginWithKakaoBtn from '../components/Buttons/LoginWithKakaoButton';
import mockup from '../assets/images/iPhone 12 Mini - White - Portrait.png';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextTransition from 'react-text-transition';

const texts = [
	'맑아요 ☀️',
	'흐려요 ☁️',
	'살짝 흐려요 ⛅️',
	'비가 와요 ☔️',
	'눈이 와요 ❄️',
	'천둥번개가 쳐요 ⚡️',
	'강풍이 심해요 💨',
];

const SectionStyle = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 72px 24px;
	margin: 24px 0px;

	&:first-child,
	&:last-child {
		margin: 0;
	}

	&:nth-child(odd) {
		background-color: #fafafa;
	}

	strong {
		font-family: tossface;
		font-size: 1.1rem;
		font-weight: 500;
		margin-bottom: 12px;
	}

	.section-title {
		font-size: 1.5rem;
		font-weight: 600;
		line-height: 1.5;
		margin-bottom: 24px;

		span {
			color: #eddf66;
			font-weight: 700;
		}
	}

	.center {
		text-align: center;
	}
`;

const CardStyle = styled.div`
	width: 100%;
	max-width: 600px;
	height: 200px;
	background-color: white;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 24px;
	box-shadow: 3px 3px 20px 2px rgba(0, 0, 0, 0.05);

	h1 {
		font-size: 1.5rem;
		color: #333333;
		font-weight: 600;
	}
`;

const Landing = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => setIndex((prev) => prev + 1), 1500);
		return () => {
			clearTimeout(intervalId);
		};
	}, []);

	return (
		<>
			<Header />
			<main>
				<SectionStyle>
					<strong>날씨</strong>
					<h1 className="section-title">
						시간을 지정하면,
						<br />
						<span>날씨</span>를 알려드려요
					</h1>
					<CardStyle>
						<h1>
							오늘은{' '}
							<TextTransition inline direction="down">
								<span className="tossface">{texts[index % texts.length]}</span>
							</TextTransition>
						</h1>
					</CardStyle>
				</SectionStyle>
				<SectionStyle>
					<strong>뉴스</strong>
					<h1 className="section-title tossface">
						원한다면
						<br />
						<span>뉴스</span>까지 한 번에 📰
					</h1>
				</SectionStyle>
				<SectionStyle>
					<img
						src={mockup}
						width="100%"
						style={{ maxWidth: '300px', margin: '0 auto' }}
					/>
				</SectionStyle>
				<SectionStyle>
					<h1 className="section-title center tossface">
						카카오로
						<br />
						바로 시작할 수 있어요
					</h1>
					<LoginWithKakaoBtn />
				</SectionStyle>
			</main>
		</>
	);
};

export default Landing;
