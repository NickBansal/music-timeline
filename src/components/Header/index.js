import React from 'react';
import styled from 'styled-components';
import dj from '../../assets/dj.jpg';

const Container = styled.div`
	margin: 0;
	height: 240px;
`;

const Title = styled.h1`
	font-size: 100px;
	margin: 0;
	padding: 32px 0 0 0;
	color: white;
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

	@media (min-width: 650px) {
		width: 650px;
		border-radius: 40%;
	}
`;

const Small = styled.p`
	color: white;
	font-size: 35px;
	margin: 0;
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
