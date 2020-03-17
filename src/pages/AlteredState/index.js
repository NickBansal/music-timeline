import React from 'react';
import styled from 'styled-components';
import breakPoints from '../../utils/styleConstants';

const Container = styled.div`
	color: white;
	width: 90%;
	margin: 20px auto;
	max-width: 1000px;
`;

const TimePeriod = styled.div`
	border-bottom: 1px solid white;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;

	&:last-of-type {
		border-bottom: none;
	}

	@media (min-width: ${breakPoints.mobileMax}) {
		height: 70px;
	}
`;

const Era = styled.p`
	font-size: 20px;
	@media (min-width: ${breakPoints.mobileMax}) {
		font-size: 30px;
	}
`;

const Icon = styled.i`
	font-size: 25px;
	cursor: pointer;
	@media (min-width: ${breakPoints.mobileMax}) {
		font-size: 30px;
	}
`;

const AlteredState = () => {
	return (
		<Container>
			<TimePeriod>
				<Era>1960&apos;s</Era>
				<Icon
					className="fa-2x fas fa-plus"
					id="1960"
					onClick={e => console.log(e.target.id)}
				/>
			</TimePeriod>
			<TimePeriod>
				<Era>1970&apos;s</Era>
				<Icon
					className="fa-2x fas fa-plus"
					id="1970"
					onClick={e => console.log(e.target.id)}
				/>
			</TimePeriod>
			<TimePeriod>
				<Era>1980&apos;s</Era>
				<Icon
					className="fa-2x fas fa-plus"
					id="1980"
					onClick={e => console.log(e.target.id)}
				/>
			</TimePeriod>
			<TimePeriod>
				<Era>1990&apos;s</Era>
				<Icon
					className="fa-2x fas fa-plus"
					id="1990"
					onClick={e => console.log(e.target.id)}
				/>
			</TimePeriod>
			<TimePeriod>
				<Era>2000&apos;s</Era>
				<Icon
					className="fa-2x fas fa-plus"
					id="2000"
					onClick={e => console.log(e.target.id)}
				/>
			</TimePeriod>
		</Container>
	);
};

export default AlteredState;
