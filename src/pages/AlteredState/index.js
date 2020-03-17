import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	color: white;
	width: 1000px;
	margin: 20px auto;
`;

const Time = styled.div`
	border: 1px solid white;
	height: 70px;
	width: 70%;
	min-width: 1000px;
`;

const Sixties = styled(Time)``;
const Seventies = styled(Time)``;
const Eighties = styled(Time)``;
const Nineties = styled(Time)``;

const AlteredState = () => {
	return (
		<Container>
			<Sixties />
			<Seventies />
			<Eighties />
			<Nineties />
		</Container>
	);
};

export default AlteredState;
