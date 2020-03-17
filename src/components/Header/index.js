import React from 'react';
import styled from 'styled-components';
import dj from '../../assets/dj.jpg';
import breakPoints from '../../utils/constants';

const Container = styled.div`
	margin: 0;
	box-shadow: 1px 1px 20px white;
	height: 240px;

	@media (min-width: ${breakPoints.mobileMax}) {
		height: 340px;
	}
`;

const Title = styled.h1`
	font-size: 60px;
	margin: 0;
	padding: 32px 0 0 0;
	color: white;

	@media (min-width: ${breakPoints.mobileMax}) {
		font-size: 100px;
	}
`;

const Image = styled.img`
	top: 0;
	right: 0;
	height: 240px;
	width: 100%;
	left: 50%;
	transform: translate(-50%, 0);
	position: absolute;
	z-index: -1;
	border-radius: 0;
	filter: blur(1px);

	@media (min-width: ${breakPoints.mobileMax}) {
		width: 1000px;
		height: 340px;
	}
`;

const Small = styled.p`
	color: white;
	font-size: 25px;
	margin: 0;

	@media (min-width: ${breakPoints.mobileMax}) {
		font-size: 35px;
	}
`;

const Header = () => {
	return (
		<Container>
			<Title>Timeline</Title>
			<Small>Electronic music</Small>
			<Image src={dj} alt="DJ decks" />
		</Container>
	);
};

export default Header;
